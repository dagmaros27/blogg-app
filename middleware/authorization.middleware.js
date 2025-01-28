const asyncHandler = require("express-async-handler");

const adminMiddleware = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "ROLE_ADMIN") {
    res.status(403);
    throw new Error("The user is not allowed");
  }

  next();
});

module.exports = adminMiddleware;
