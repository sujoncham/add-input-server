const express = require("express");
const {
  getComment,
  addComment,
  getCommentById,
  updateCommentById,
  deleteComment,
} = require("./comment.controller");

const commentRouter = express.Router();

commentRouter.get("/", getComment);
commentRouter.post("/addComment", addComment);
commentRouter.get("/:id", getCommentById);
commentRouter.put("/:id", updateCommentById);
commentRouter.delete("/:id", deleteComment);

module.exports = commentRouter;
