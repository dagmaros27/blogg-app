const { Blog } = require("../model/models");

const createBlog = async (data) => {
  const blog = new Blog(data);
  return await blog.save();
};

const updateBlogById = async (blogId, userId, updates) => {
  const blog = await Blog.findById(blogId);
  if (!blog) {
    throw new Error("Blog not found");
  }

  if (blog.author.toString() !== userId) {
    throw new Error("You are not authorized to update this blog");
  }

  Object.assign(blog, updates);
  return await blog.save();
};

const deleteBlogById = async (blogId, userId) => {
  const blog = await Blog.findById(blogId);
  if (!blog) throw new Error("Blog not found");

  if (blog.author.toString() !== userId) {
    throw new Error("You are not authorized to delete this blog");
  }

  return await Blog.findByIdAndDelete(blogId);
};

const getBlogById = async (blogId = null) => {
  if (blogId) {
    const blog = await Blog.findById(blogId);
    if (!blog) throw new Error("Blog not found");
    return blog;
  }
  return await Blog.find();
};

const getAllBlogs = async () => {
  return await Blog.find();
};

module.exports = {
  createBlog,
  updateBlogById,
  deleteBlogById,
  getBlogById,
  getAllBlogs,
};
