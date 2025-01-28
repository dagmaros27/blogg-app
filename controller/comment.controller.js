const {
  createComment,
  updateCommentById,
  deleteCommentById,
  getCommentsByBlogId,
} = require("../service/comment.service");

const asyncHandler = require("express-async-handler");

const addComment = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const blogId = req.params.blogId;
  const { comment } = req.body;

  const data = {
    UserID: userId,
    BlogID: blogId,
    comment,
  };

  const newComment = await createComment(data);

  res.status(201).json(newComment);
});

const updateComment = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const commentId = req.params.commentId;
  const { comment } = req.body;

  const updatedComment = await updateCommentById(commentId, userId, {
    comment,
  });

  res.status(200).json(updatedComment);
});

const deleteComment = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const commentId = req.params.commentId;

  await deleteCommentById(commentId, userId);

  res.status(204).json();
});

const getComments = asyncHandler(async (req, res) => {
  const blogId = req.params.blogId;

  const comments = await getCommentsByBlogId(blogId);

  res.status(200).json(comments);
});

module.exports = {
  addComment,
  updateComment,
  deleteComment,
  getComments,
};
