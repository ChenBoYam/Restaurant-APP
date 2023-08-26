const express = require("express");
const router = express.Router();
const galleryController = require("../controllers/galleryController");

router.get("/", galleryController.getAllImages);
router.post('/', galleryController.upload.single('image'), galleryController.createImage);

router.patch("/:id", galleryController.updateImage);
router.delete("/:id", galleryController.deleteImage);

module.exports = router;
