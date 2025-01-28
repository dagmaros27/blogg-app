const multer = require("multer");
const path = require("path");

const MAX_FILE_SIZE = 1024 * 1024 * 5; // 5MB
const UPLOAD_FOLDER = path.join(__dirname, "../uploads");
const UNIQUE_FILE_NAME = Date.now() + "-" + Math.round(Math.random() * 1e9);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },

  filename: (req, file, cb) => {
    cb(null, `${UNIQUE_FILE_NAME}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|gif/;
  const extName = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTypes.test(file.mimetype);

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});

module.exports = upload;
