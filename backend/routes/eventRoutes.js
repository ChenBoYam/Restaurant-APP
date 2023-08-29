const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/", eventController.getAllImages);
router.post('/', eventController.upload.single('image'), eventController.createImage);

router.patch("/:id", eventController.updateImage);
router.delete("/:id", eventController.deleteImage);

module.exports = router;
