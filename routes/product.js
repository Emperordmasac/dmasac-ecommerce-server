// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create } = require("../controllers/product");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/product", authcheck, admincheck, create);

// Export Statements
module.exports = router;
