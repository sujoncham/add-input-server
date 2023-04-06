const mongoose = require('mongoose');

const cateSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        unique: [true, 'already exist this title'],
    },
}, {
    timestamps: true,
});

const Categ = mongoose.model("category", cateSchema);
module.exports = Categ;