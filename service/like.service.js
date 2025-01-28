const { Like } = require("../model/models");

const likeBlogById = async (userId, blogId) => {
  const existingLike = await Like.findOne({ UserID: userId, BlogID: blogId });
  if (existingLike) {
    throw new Error("You have already liked this blog");
  }

  const like = new Like({ UserID: userId, BlogID: blogId });
  return await like.save();
};

const unlikeBlogById = async (userId, blogId) => {
  const like = await Like.findOne({ UserID: userId, BlogID: blogId });
  if (!like) {
    throw new Error("Like not found");
  }

  return await Like.findByIdAndDelete(like._id);
};

module.exports = {
  likeBlogById,
  unlikeBlogById,
};
