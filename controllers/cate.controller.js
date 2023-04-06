const Categ = require("../models/category.model");


exports.getCategory = async(req, res, next)=>{

    try {
        const blogs = await Categ.find()

        return res.status(200).json({
            status: "success",
            message: "blog is created successfully",
            data: blogs,
        })
         
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "blog is not found",
            error: error,
        })
    }
};


exports.addCate = async(req, res, next)=>{
  console.log(req.body)
    const {category} = req.body;
    const newBlog = new Categ({
        category,
    }); 
    
    try {
        
        await newBlog.save();
        
    } catch (error) {
        return res.send({
            status: "failed",
            message: "blog is not created",
            error: error,
        })
    }
    return res.status(200).json({
        status: "success",
        message: "blog created successfully",
        data: newBlog,
    })
};

exports.getCatById = async(req, res, next)=>{
    
    try {
        const {title} = req.body;
        const blogId = req.params.id;
        const blog = await Categ.findByIdAndUpdate(blogId, {
            title,
        });

        return res.status(200).json({
            status: "success",
            message: "update by id successfully",
            data: blog,
        })
    } catch (error) {
        console.log(error)
    }
};


exports.updateCatById = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
        const blog = await Categ.findById(blogId).populate('user');

         return res.status(200).json({
            status: "success",
            message: "get by id successfully",
            user: blog,
        })
    } catch (error) {
        console.log(error)
    }
};


exports.deleteCate = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
         await Categ.findByIdAndRemove(blogId);

         return res.status(200).json({
            status: "success",
            message: "deleted blog by id successfully",
        })
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "not deleted blog",
            error: error.message,
        })
    }

};