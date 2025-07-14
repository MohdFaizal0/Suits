const mongoose = require(`mongoose`);
const dotenv = require("dotenv");
require(`dotenv`).config();

const connection = async (req, res) => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("connection sucessfull");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connection;
