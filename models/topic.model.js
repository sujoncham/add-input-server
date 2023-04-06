const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: [true, 'already exist this title'],
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

const Topic = mongoose.model("topic", topicSchema);
module.exports = Topic;