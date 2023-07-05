const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: [true, "already exist this title"],
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    comment: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Comment",
      },
    ],
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model("Topic", topicSchema);
module.exports = Topic;
