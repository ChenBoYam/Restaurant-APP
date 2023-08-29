const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.get("/", contactController.getContact);
router.post("/", contactController.createContact);

router.patch("/:id", contactController.updateContact);
router.delete("/:id", contactController.deleteContact);

module.exports = router;
