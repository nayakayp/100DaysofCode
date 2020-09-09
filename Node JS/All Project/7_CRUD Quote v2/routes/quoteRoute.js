const express = require("express");
const router = express.Router();

// Import controller modules.
const quote_controller = require("../controllers/quoteController");

// PRODUCT ROUTES //

// GET homepage
router.get("/", quote_controller.index);

// GET request for creating a Quote.
router.get("/create", quote_controller.quote_create_get);

// POST request for createing a Quote.
router.post("/create", quote_controller.quote_create_post);

// GET request for deleting a Quote.
router.get("/:id/delete", quote_controller.quote_delete_get);

// POST request for deleting a Quote.
router.post("/:id/delete", quote_controller.quote_delete_post);

// GET request for updating a Quote.
router.get("/:id/update", quote_controller.quote_update_get);

// POST request for updating a Quote.
router.post("/:id/update", quote_controller.quote_update_post);

module.exports = router;
