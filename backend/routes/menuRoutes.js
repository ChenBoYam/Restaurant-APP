const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController");

router.get("/", menuController.getAllMenuEntries);
router.post('/', menuController.upload.single('image'), menuController.createMenuEntry);

router.patch("/:id", menuController.upload.single('image'), menuController.updateMenuEntry);
router.delete("/:id", menuController.deleteMenuEntry);

module.exports = router;
