const express = require("express");
const {
  handleGetMediaReviews,
  handleCreateMediaReview,
  handleDeleteMediaReview,
} = require("../controllers/mediaReview.controller.js");

const mediaReview = express.Router();

mediaReview.get("/", handleGetMediaReviews);
mediaReview.post("/", handleCreateMediaReview);
mediaReview.delete("/:id", handleDeleteMediaReview);

module.exports = mediaReview;
