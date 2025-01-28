const { BlogRating } = require("../model/models");

const createBlogRating = async (data) => {
  const blogRating = new BlogRating(data);
  return await blogRating.save();
};

module.exports = {
  createBlogRating,
};
