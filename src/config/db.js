const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/PaymentMicroservices', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB is Connected!');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectDB;
