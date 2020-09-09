const express = require("express");
const router = express.Router();

// Import controller modules.
const mahasiswa_controller = require("../controllers/mahasiswaController");

// PRODUCT ROUTES //

// GET homepage
router.get("/", mahasiswa_controller.index);

// POST request for createing a Mahasiswa.
router.post("/create", mahasiswa_controller.mahasiswa_create_post);

// POST request for deleting a Mahasiswa.
router.post("/:id/delete", mahasiswa_controller.mahasiswa_delete_post);

// POST request for updating a Mahasiswa.
router.post("/:id/update", mahasiswa_controller.mahasiswa_update_post);

module.exports = router;
