//mport Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { upload, remove } = require("../controllers/cloudinary");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/upload_images", authcheck, admincheck, upload);
router.post("/remove_image", authcheck, admincheck, remove);

// Export Statements
module.exports = router;
