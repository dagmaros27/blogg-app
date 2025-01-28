const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  Title: { type: String, required: true },
  Content: { type: String, required: true },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
