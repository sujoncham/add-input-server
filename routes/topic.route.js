const express = require('express');
const { getTopic, postTopic, getTopicById, updateTopicById, deleteTopic } = require('../controllers/topic.controller');
const topicRouter = express.Router()
const multer = require('multer')

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})


// img filter
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    } 
}

const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});

topicRouter.get('/', getTopic);
topicRouter.post('/addTopic', upload.single("image"), postTopic);
topicRouter.get('/:id', getTopicById);
topicRouter.put('/:id', updateTopicById);
topicRouter.delete('/:id', deleteTopic);

module.exports = topicRouter;