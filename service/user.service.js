const { User } = require("../model/models");

const getUserById = async (id) => {
  return User.findById(id).select("-password");
};

const getUserByEmail = async (email) => {
  return User.findOne({ Email: email });
};

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const searchUser = async (query) => {
  const regex = new RegExp(query, "i"); // Case-insensitive search
  return await User.find({ $or: [{ name: regex }, { username: regex }] });
};

const updateUser = async (id, user) => {
  return User.findByIdAndUpdate(id, user, { new: true });
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  searchUser,
  updateUser,
};
