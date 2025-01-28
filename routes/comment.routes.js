const {
  addComment,
  deleteComment,
  getComments,
  updateComment,
} = require("../controller/comment.controller");
const authMiddleware = require("../middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.use(authMiddleware);

router.post("/", addComment);
router.delete("/:id", deleteComment);
router.get("/get", getComments);
router.put("/:id", updateComment);

module.exports = router;
