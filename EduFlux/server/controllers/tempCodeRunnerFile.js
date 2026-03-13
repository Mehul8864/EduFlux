// controllers/categoryController.js
const mongoose = require("mongoose");
const Category = require("../models/Category");

/**
 * Return integer in [0, max)
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || String(name).trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const categoryDetails = await Category.create({
      name: name.trim(),
      description: description ? String(description).trim() : undefined,
    });

    console.log("Created category:", categoryDetails._id);

    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: categoryDetails,
    });
  } catch (error) {
    console.error("createCategory error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.showAllCategories = async (req, res) => {
  try {
    console.log("INSIDE SHOW ALL CATEGORIES");
    // using lean() for a lightweight plain JS object (faster & less mem)
    const allCategories = await Category.find({}).select("name description").lean().exec();
    return res.status(200).json({
      success: true,
      data: allCategories,
    });
  } catch (error) {
    console.error("showAllCategories error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

// categoryPageDetails
exports.categoryPageDetails = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "categoryId is required",
      });
    }

    if (!mongoose.isValidObjectId(categoryId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid categoryId",
      });
    }

    // Fetch selected category and its published courses + ratingAndReviews
    // Use lean() for performance; populate only needed fields
    const selectedCategoryPromise = Category.findById(categoryId)
      .select("name description courses")
      .populate({
        path: "courses",
        match: { status: "Published" },
        select: "title sold price instructor ratingAndReviews status createdAt",
        populate: {
          path: "ratingAndReviews",
          select: "rating review user createdAt",
        },
      })
      .lean()
      .exec();

    // Count other categories (for random selection) and fetch top-selling across all categories in parallel
    const countOtherCategoriesPromise = Category.countDocuments({ _id: { $ne: categoryId } }).exec();

    // We'll fetch all categories with their published courses (only necessary fields)
    const allCategoriesPromise = Category.find()
      .select("courses")
      .populate({
        path: "courses",
        match: { status: "Published" },
        select: "title sold price instructor",
        populate: { path: "instructor", select: "name _id" },
      })
      .lean()
      .exec();

    const [selectedCategory, otherCount, allCategories] = await Promise.all([
      selectedCategoryPromise,
      countOtherCategoriesPromise,
      allCategoriesPromise,
    ]);

    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // Make sure courses is an array
    const selectedCourses = Array.isArray(selectedCategory.courses) ? selectedCategory.courses : [];

    if (selectedCourses.length === 0) {
      // It's okay to return 200 with empty course list - but if your API expects 404, change this.
      return res.status(200).json({
        success: true,
        data: {
          selectedCategory,
          differentCategory: null,
          mostSellingCourses: [],
          note: "No published courses found for the selected category",
        },
      });
    }

    // Pick a random different category (if any)
    let differentCategory = null;
    if (otherCount > 0) {
      // pick random index within otherCount then findOne with skip
      const randomIndex = getRandomInt(otherCount);
      // find one category excluding selected with skip(randomIndex)
      // populate its published courses (lightweight)
      differentCategory = await Category.findOne({ _id: { $ne: categoryId } })
        .select("name description courses")
        .populate({
          path: "courses",
          match: { status: "Published" },
          select: "title sold price instructor",
          populate: { path: "instructor", select: "name _id" },
        })
        .skip(randomIndex)
        .lean()
        .exec();
    } else {
      console.log("No other categories available to select a differentCategory.");
    }

    // Flatten all published courses from all categories and compute top sellers
    const allCourses = allCategories.flatMap((c) => (Array.isArray(c.courses) ? c.courses : []));
    const mostSellingCourses = allCourses
      .map((course) => ({
        ...course,
        sold: Number(course.sold || 0),
      }))
      .sort((a, b) => b.sold - a.sold)
      .slice(0, 10);

    return res.status(200).json({
      success: true,
      data: {
        selectedCategory,
        differentCategory,
        mostSellingCourses,
      },
    });
  } catch (error) {
    console.error("categoryPageDetails error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};