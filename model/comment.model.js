const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  BlogID: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
  Content: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
