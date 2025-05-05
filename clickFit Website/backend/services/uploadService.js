const Upload = require("../models/uploadModel");

const saveFile = async (filename) => {
  const file = new Upload({ filename });
  return await file.save();
};

module.exports = { saveFile };
