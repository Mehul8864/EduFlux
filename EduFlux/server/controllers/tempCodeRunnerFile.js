// controllers/categoryController.js
const Category = require("../models/Category");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const categoryDetails = await Category.create({
      name,
      description,
    });

    console.log("Created category:", categoryDetails);

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
    const allCategories = await Category.find({});
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
    console.log("PRINTING CATEGORY ID:", categoryId);

    if (!categoryId) {
      return res.status(400).json({
        success: false,
        message: "categoryId is required",
      });
    }

    // find selected category and populate its published courses + their ratingAndReviews
    const selectedCategory = await Category.findById(categoryId)
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: "ratingAndReviews",
      })
      .exec();

    console.log("SELECTED CATEGORY:", selectedCategory);

    if (!selectedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    const selectedCourses = Array.isArray(selectedCategory.courses)
      ? selectedCategory.courses
      : [];

    if (selectedCourses.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No published courses found for the selected category",
      });
    }

    // Get a different random category (if any)
    const categoriesExceptSelected = await Category.find({
      _id: { $ne: categoryId },
    }).exec();

    let differentCategory = null;
    if (Array.isArray(categoriesExceptSelected) && categoriesExceptSelected.length > 0) {
      const randomIndex = getRandomInt(categoriesExceptSelected.length);
      const randomCategoryId = categoriesExceptSelected[randomIndex]._id;

      differentCategory = await Category.findById(randomCategoryId)
        .populate({
          path: "courses",
          match: { status: "Published" },
        })
        .exec();
    } else {
      console.log("No other categories available to select a differentCategory.");
    }

    // Get top-selling courses across all categories
    const allCategories = await Category.find()
      .populate({
        path: "courses",
        match: { status: "Published" },
        populate: { path: "instructor" },
      })
      .exec();

    const allCourses = allCategories.flatMap((c) => Array.isArray(c.courses) ? c.courses : []);
    const mostSellingCourses = allCourses
      .sort((a, b) => (b.sold || 0) - (a.sold || 0))
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