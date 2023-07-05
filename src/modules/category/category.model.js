const mongoose = require("mongoose");

const cateSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      unique: [true, "already exist this title"],
    },
    topic: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Topic",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", cateSchema);
module.exports = Category;
