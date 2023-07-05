const Address = require("../models/address.model");



exports.getAddress = async(req, res, next)=>{

    try {
        const caty = await Address.find().populate('User');

        return res.status(200).json({
            status: "success",
            message: "blog is created successfully",
            data: caty,
        })
         
    } catch (error) {
        return res.status(400).json({
            status: "failed",
            message: "blog is not found",
            error: error,
        })
    }
};


exports.addAdress = async(req, res, next)=>{
  console.log(req.body)
    const {category} = req.body;
    const newBlog = new Address({
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

exports.getAddressById = async(req, res, next)=>{
    
    try {
        const {title} = req.body;
        const blogId = req.params.id;
        const blog = await Address.findByIdAndUpdate(blogId, {
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


exports.updateAddressById = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
        const blog = await Address.findById(blogId).populate('user');

         return res.status(200).json({
            status: "success",
            message: "get by id successfully",
            user: blog,
        })
    } catch (error) {
        console.log(error)
    }
};
