const jwt = require("jsonwebtoken");
const { User } = require("../model/models");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY);

      if (!decoded) {
        res.status(401);
        throw new Error("Invalid token");
      }

      // Fetch the user and attach it to req.user
      const user = await User.findById(decoded.user_id).select("-Password");

      if (!user) {
        res.status(404);
        throw new Error("User not found");
      }

      req.user = user;

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = authMiddleware;
