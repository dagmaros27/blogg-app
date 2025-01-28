const {
  searchUserProfile,
  updateUserProfile,
} = require("../controller/userProfile.controller");
const upload = require("../utils/uploadImage");
const authMiddleware = require("../middleware/auth.middleware");
const express = require("express");
const router = express.Router();

router.use(authMiddleware);

router.get("/search", searchUserProfile);
router.put("/update", upload.single("image"), updateUserProfile);

module.exports = router;
