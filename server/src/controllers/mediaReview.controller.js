const { MediaReview } = require("../models/mediaReviewModel");
// /api/reviews Get
const handleGetMediaReviews = async (req, res) => {
  try {
    const reviews = await MediaReview.find().sort({ createdAt: -1 });
    res
      .status(200)
      .json({ message: "Media Review Fetched successfully", reviews });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleCreateMediaReview = async (req, res) => {
  try {
    const { image, reference } = req.body;
    const existingMedia = await MediaReview.find({ image });
    if (existingMedia.length > 0) {
      return res
        .status(400)
        .json({ message: "Media review with the same image already exists" });
    }
    const review = await MediaReview.create({ image, reference });
    res
      .status(200)
      .json({ message: "Media Review Created successfully", review });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handleDeleteMediaReview = async (req, res) => {
  try {
    const mediaReview = await MediaReview.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: "Media Review deleted successfully", mediaReview });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handleGetMediaReviews,
  handleCreateMediaReview,
  handleDeleteMediaReview,
};
