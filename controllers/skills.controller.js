const Skills = require("../models/skills.model");



exports.getSkills = async(req, res, next)=>{

    try {
        const caty = await Skills.find().populate('User');

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


exports.addSkills = async(req, res, next)=>{
  console.log(req.body)
  const skillId = req.params.id;
    const {skill, description, user_id} = req.body;
    const newBlog = new Skills({
        skill,
        description,
        user_id: skillId,
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

exports.getSkillsById = async(req, res, next)=>{
    
    try {
        const {title} = req.body;
        const blogId = req.params.id;
        const blog = await Skills.findByIdAndUpdate(blogId, {
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


exports.updateSkillsById = async(req, res, next)=>{
    
    try {
        const blogId = req.params.id;
        const blog = await Skills.findById(blogId).populate('user');

         return res.status(200).json({
            status: "success",
            message: "get by id successfully",
            user: blog,
        })
    } catch (error) {
        console.log(error)
    }
};

