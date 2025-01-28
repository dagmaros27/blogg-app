const { updateUser, searchUser } = require("../service/user.service");
const asyncHandler = require("express-async-handler");

const searchUserProfile = asyncHandler(async (req, res) => {
  const query = req.query.q;
  const users = await searchUser(query);
  res.json(users);
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = req.body;

  if (req.file) {
    user.profileImage = req.file.filename;
  }

  const updatedUser = await updateUser(req.user.id, user);
  res.json(updatedUser);
});

module.exports = {
  searchUserProfile,
  updateUserProfile,
};
