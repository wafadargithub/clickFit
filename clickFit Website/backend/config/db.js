const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/clickfit");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Error:", error.message);
  }
};

module.exports = dbConnect;
