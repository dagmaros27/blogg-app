const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogRatingSchema = new Schema({
  UserID: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  BlogID: {
    type: Schema.Types.ObjectId,
    ref: "Blog",
    required: true,
  },
  RatingValue: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
});

const BlogRating = mongoose.model("BlogRating", blogRatingSchema);

module.exports = BlogRating;
