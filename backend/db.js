const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"; // You probably want to specify a DB name

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Mongo connected successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // optional: exit the app if DB fails to connect
  }
};

module.exports = connectToMongo;
