const express = require("express");
const router = express.Router();
const aboutController = require("../controllers/aboutController");

router.get("/", aboutController.getAllAboutEntries);
router.post('/', aboutController.upload.single('image'), aboutController.createAboutEntry);

router.patch("/:id", aboutController.updateAboutEntry);
router.delete("/:id", aboutController.deleteAboutEntry);

module.exports = router;
