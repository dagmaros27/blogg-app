const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  BlogID: { type: Schema.Types.ObjectId, ref: "Blog", required: true },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
