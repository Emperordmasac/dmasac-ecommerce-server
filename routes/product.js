// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create, listAll } = require("../controllers/product");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/product", authcheck, admincheck, create);
router.get("/products/:count", listAll);

// Export Statements
module.exports = router;
