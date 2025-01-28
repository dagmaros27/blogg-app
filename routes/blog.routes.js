const {
  addBlog,
  addRating,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} = require("../controller/blog.controller");
const authMiddleware = require("../middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.use(authMiddleware);

router.post("/", addBlog);
router.post("/rating", addRating);
router.delete("/:id", deleteBlog);
router.get("/:id", getBlog);
router.get("/", getBlogs);
router.put("/:id", updateBlog);

module.exports = router;
