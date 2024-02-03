const multer = require("multer");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileExtension = file.mimetype.split("/")[0];
        if (fileExtension === "image") {
            cb(null, "public/images/wavePics");
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.${file.originalname}`);
    },
});

const waveUpload = multer({ storage: multerStorage });

module.exports = waveUpload;