// Import Statements
const express = require("express");

// Router variables
const router = express.Router();

// Controller Import
const { create, read, update, remove, list } = require("../controllers/sub");

// Middlewares Import
const { authcheck, admincheck } = require("../middlewares/auth");

// Endpoints
router.post("/sub_category", authcheck, admincheck, create);
router.get("/sub_categories", list);
router.get("/sub_category/:slug", read);
router.put("/sub_category/:slug", authcheck, admincheck, update);
router.delete("/sub_category/:slug", authcheck, admincheck, remove);

// Export Statements
module.exports = router;
