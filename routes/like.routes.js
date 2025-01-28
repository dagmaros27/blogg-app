const express = require("express");
const router = express.Router();
const { likeBlog, unlikeBlog } = require("../controller/like.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.use(authMiddleware);

router.post("/like/:id", likeBlog);
router.post("/unlike/:id", unlikeBlog);

module.exports = router;
