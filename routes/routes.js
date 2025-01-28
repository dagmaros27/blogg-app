const AuthRoutes = require("./auth.routes");
const CommentRoutes = require("./comment.routes");
const LikeRoutes = require("./like.routes");
const UserProfileRoutes = require("./userProfile.routes");
const BlogRoutes = require("./blog.routes");

module.exports = (app) => {
  app.use("/api/auth", AuthRoutes);
  app.use("/api/comment", CommentRoutes);
  app.use("/api/react", LikeRoutes);
  app.use("/api/profile", UserProfileRoutes);
  app.use("/api/blog", BlogRoutes);
};
