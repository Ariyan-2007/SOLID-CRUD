import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 },
});
