const path = require("path");
const multer = require("multer");
const { saveFile } = require("../services/uploadService");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload_images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage }).single("image");

const uploadImage = (req, res) => {
  upload(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: "Error uploading image" });
    }

    await saveFile(req.file.filename);
    res.status(200).json({ message: "Image uploaded successfully" });
  });
};

module.exports = { uploadImage };
