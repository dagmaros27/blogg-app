const {
  createBlog,
  deleteBlogById,
  getBlogById,
  updateBlogById,
  getAllBlogs,
} = require("../service/blog.service");
const { createBlogRating } = require("../service/blogRating.service");
const { validateRequest } = require("../utils/validators");
const asyncHandler = require("express-async-handler");

const addBlog = asyncHandler(async (req, res) => {
  const errors = validateRequest(["Title", "Content"], req.body);
  if (errors.length > 0) {
    res.status(400);
    throw new Error(errors.join(", "));
  }

  const blog = await createBlog({
    ...req.body,
    UserID: req.user._id,
  });
  res.status(201).json(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await updateBlogById(req.params.id, req.user._id, req.body);
  res.json(blog);
});

const deleteBlog = asyncHandler(async (req, res) => {
  await deleteBlogById(req.params.id, req.user._id);
  res.status(204).send();
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await getBlogById(req.params.id || null);
  res.json(blog);
});

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await getAllBlogs();
  res.json(blogs);
});

const addRating = asyncHandler(async (req, res) => {
  const errors = validateRequest(["rating"], req.body);
  if (errors.length > 0) {
    res.status(400);
    throw new Error(errors.join(", "));
  }

  const blog = await getBlogById(req.params.id);
  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const { rating } = req.body;
  await createBlogRating({
    RatingValue: rating,
    BlogId: req.params.id,
    UserID: req.user._id,
  });

  res.status(200).json("Rating added successfully");
});

module.exports = {
  addBlog,
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  addRating,
};
