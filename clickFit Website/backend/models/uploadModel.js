const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  filename: String,
  uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Upload", uploadSchema);
