const mongoose = require('mongoose');
require('dotenv').config()

const URL =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ec4qos0.mongodb.net/myTopic?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
  };

  module.exports = connectDB;