const mongoose =require('mongoose');
const addressSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    } 
},{
    timestamps: true,
})

const Address = mongoose.model("Address", addressSchema)
module.exports = Address;