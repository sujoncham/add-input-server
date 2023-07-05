const mongoose =require('mongoose');
const skillSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    } 
}, {
    timestamps: true,
})

const Skills = mongoose.model("Skills", skillSchema)
module.exports = Skills;