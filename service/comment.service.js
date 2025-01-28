const { Comment } = require("../model/models");

const createComment = async (data) => {
  const comment = new Comment(data);
  return await comment.save();
};

const updateCommentById = async (commentId, userId, updates) => {
  const comment = await Comment.findById(commentId);
  if (!comment) throw new Error("Comment not found");

  if (comment.author.toString() !== userId) {
    throw new Error("You are not authorized to update this comment");
  }

  Object.assign(comment, updates);
  return await comment.save();
};

const deleteCommentById = async (commentId, userId) => {
  const comment = await Comment.findById(commentId);
  if (!comment) throw new Error("Comment not found");

  if (comment.author.toString() !== userId) {
    throw new Error("You are not authorized to delete this comment");
  }

  return await Comment.findByIdAndDelete(commentId);
};

const getCommentsByBlogId = async (blogId) => {
  return await Comment.find({ blog: blogId }).populate("UserID", "Username");
};

module.exports = {
  createComment,
  updateCommentById,
  deleteCommentById,
  getCommentsByBlogId,
};
