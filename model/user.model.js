const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  Username: { type: String, required: true, unique: true },
  Email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  Name: { type: String, required: true },
  Bio: { type: String },
  Role: { type: String, enum: ["Admin", "User"], required: true },
  ProfilePicture: { type: String },
});

//hash the password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("Password")) {
    return next();
  }

  console.log("Password before hashing:", this.Password); // Debugging

  try {
    this.Password = await bcrypt.hash(this.Password, await bcrypt.genSalt(10));
    next();
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
