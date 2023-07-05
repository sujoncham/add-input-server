const Category = require("./category.model");

exports.getCategory = async (req, res, next) => {
  const category = await Category.find().populate("topic");
  try {
    return res.status(200).json({
      status: "success",
      message: "Get category successfully",
      data: category,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "category is not found",
      error: error,
    });
  }
};

exports.addCate = async (req, res, next) => {
  console.log(req.body);
  try {
    const { category } = req.body;
    const newBlog = new Category({
      category,
    });

    await newBlog.save();

    return res.status(200).json({
      status: "success",
      message: "blog created successfully",
      data: newBlog,
    });
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: "category is not created",
      error: error,
    });
  }
};

exports.getCatById = async (req, res, next) => {
  try {
    const { title } = req.body;
    const blogId = req.params.id;
    const blog = await Category.findByIdAndUpdate(blogId, {
      title,
    }).populate("topic");

    return res.status(200).json({
      status: "success",
      message: "category by id successfully",
      data: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateCatById = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    const blog = await Category.findById(blogId).populate("user");

    return res.status(200).json({
      status: "success",
      message: "get by id successfully",
      user: blog,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteCate = async (req, res, next) => {
  try {
    const blogId = req.params.id;
    await Category.findByIdAndRemove(blogId);

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
