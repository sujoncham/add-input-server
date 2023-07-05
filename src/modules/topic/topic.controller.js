const Category = require("../category/category.model");
const mongoose = require("mongoose");
const Topic = require("./topic.model");

exports.getTopic = async (req, res, next) => {
  try {
    const blogs = await Topic.find().populate("comment", "user");

    return res.status(200).json({
      status: "success",
      message: "blog is created successfully",
      data: blogs,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "blog is not found",
      error: error,
    });
  }
};

exports.postTopic = async (req, res, next) => {
  // console.log(req.body)
  const { filename } = req.file;
  const { title, description, category, user } = req.body;

  let existUser;
  try {
    existUser = await Category.findById(category);
  } catch (error) {
    return console.log(error);
  }
  if (!existUser) {
    return res.status(400).json({ message: "user not found" });
  }

  const newBlog = new Topic({
    title,
    description,
    image: filename,
    category,
    user,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existUser.topic.push(newBlog);
    await existUser.save({ session });
    await session.commitTransaction();
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

exports.updateTopicById = async (req, res, next) => {
  try {
    const { title, description, image } = req.body;
    const blogId = req.params.id;
    const blog = await Topic.findByIdAndUpdate(blogId, {
      title,
      description,
      image,
    });

    return res.status(200).json({
      status: "success",
      message: "update by id successfully",
      data: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getTopicById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await Topic.findById(blogId).populate("comment");

    return res.status(200).json({
      status: "success",
      message: "get by id successfully",
      blog: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTopic = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    await Topic.findByIdAndRemove(blogId);

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
