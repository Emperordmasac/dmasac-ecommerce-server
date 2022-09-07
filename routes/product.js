// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create, list } = require("../controllers/product");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/product", authcheck, admincheck, create);
router.get("/products", list);

// Export Statements
module.exports = router;
