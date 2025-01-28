const { likeBlogById, unlikeBlogById } = require("../service/like.service");
const asyncHandler = require("express-async-handler");

const likeBlog = asyncHandler(async (req, res) => {
  console.log(req.user);
  const userId = req.user._id;
  const blogId = req.params.id;

  await likeBlogById(userId, blogId);
  res.status(200).json({ message: "Blog liked successfully" });
});

const unlikeBlog = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const blogId = req.params.id; // Fixed: Ensure consistent param usage

  await unlikeBlogById(userId, blogId);
  res.status(200).json({ message: "Blog unliked successfully" });
});

module.exports = {
  likeBlog,
  unlikeBlog,
};
