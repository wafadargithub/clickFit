const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");
const app = express();

const uploadRoutes = require("./routes/uploadRoutes");
const dbConnect = require("./config/db");

app.use(express.static(path.join(__dirname, "public")));
app.use("/upload_images", express.static("upload_images"));
app.use(express.json());

dbConnect();
app.use("/upload", uploadRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
