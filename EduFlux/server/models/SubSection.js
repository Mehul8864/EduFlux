// models/SubSection.js
import mongoose from "mongoose";

const subSectionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    // format HH:MM (e.g. 01:30)
    timeDuration: {
      type: String,
      trim: true,
      default: "00:00",
      match: [/^\d{1,2}:\d{2}$/, "timeDuration should be in HH:MM format"],
    },
    description: {
      type: String,
      trim: true,
    },
    videoUrl: {
      type: String,
      trim: true,
      validate: {
        validator: v => !v || /^https?:\/\//i.test(v),
        message: "videoUrl must be a valid http/https URL",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubSection", subSectionSchema);