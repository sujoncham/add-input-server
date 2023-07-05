const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: [true, "already exist this username"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    skills: {
      type: mongoose.Types.ObjectId,
      ref: "skills",
    },
    address: {
      type: mongoose.Types.ObjectId,
      ref: "address",
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

const User = mongoose.model("User", userSchema);

module.exports = User;
