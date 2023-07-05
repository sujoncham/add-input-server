const Comment = require("./comment.model");

exports.getComment = async (req, res, next) => {
  try {
    const comment = await Comment.find().populate("topic");

    return res.status(200).json({
      status: "success",
      message: "Get category successfully",
      data: comment,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "blog is not found",
      error: error,
    });
  }
};

exports.addComment = async (req, res, next) => {
  console.log(req.body);
  const { comment, user, topic } = req.body;
  const newBlog = new Comment({
    comment,
    user,
    topic,
  });

  try {
    await newBlog.save();
  } catch (error) {
    return res.send({
      status: "failed",
      message: "blog is not created",
      error: error,
    });
  }
  return res.status(200).json({
    status: "success",
    message: "blog created successfully",
    data: newBlog,
  });
};

exports.getCommentById = async (req, res, next) => {
  try {
    const { comment } = req.body;
    const blogId = req.params.id;
    const blog = await Comment.findByIdAndUpdate(blogId, {
      comment,
    });

    return res.status(200).json({
      status: "success",
      message: "category by id successfully",
      data: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateCommentById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await Comment.findById(blogId);

    return res.status(200).json({
      status: "success",
      message: "get by id successfully",
      user: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    await Comment.findByIdAndRemove(blogId);

    return res.status(200).json({
      status: "success",
      message: "deleted blog by id successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "not deleted blog",
      error: error.message,
    });
  }
};
