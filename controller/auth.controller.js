const { getUserByEmail, createUser } = require("../service/user.service");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const { validateRequest, validateEmail } = require("../utils/validators");
const bcrypt = require("bcrypt");
const register = asyncHandler(async (req, res) => {
  const { Username, Email, Password, Name, Bio } = req.body;

  const validationErrors = validateRequest(
    ["Username", "Email", "Password", "Name"],
    req.body
  );

  const isEmailValid = validateEmail(Email);

  if (validationErrors.length > 0 || !isEmailValid) {
    res.status(400);
    throw new Error(validationErrors.join(", "));
  }

  // Check if the user already exists
  const userExists = await getUserByEmail(Email);
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = {
    Username,
    Email,
    Password,
    Name,
    Bio,
    Role: "User",
  };

  const createdUser = await createUser(user);

  if (createdUser) {
    res.status(201).json({
      _id: createdUser._id,
      Username: createdUser.Username,
      Email: createdUser.Email,
      Name: createdUser.Name,
      Bio: createdUser.Bio,
      Token: generateToken(createdUser._id, createdUser.role),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const login = asyncHandler(async (req, res) => {
  const { Email, Password } = req.body;

  const validationErrors = validateRequest(["Email", "Password"], req.body);
  if (validationErrors.length > 0) {
    res.status(400);
    throw new Error(validationErrors.join(", "));
  }

  console.log("hereeee");

  const user = await getUserByEmail(Email);

  console.log(user);
  if (user) {
    const isPasswordMatch = await bcrypt.compare(Password, user.Password);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
      res.json({
        _id: user._id,
        Username: user.Username,
        Email: user.Email,
        Name: user.Name,
        Bio: user.Bio,
        Role: user.Role,
        Token: generateToken(user._id, user.Role),
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = {
  register,
  login,
};
