const mongoose = require("mongoose");

// Review Schema
const mediaSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    reference: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const MediaReview = mongoose.model("MediaReview", mediaSchema);

module.exports = { MediaReview };
