const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');

router.get('/gallery', galleryController.getAllImages);
router.post('/gallery', galleryController.upload.single('image'), galleryController.createImage);
router.patch('/gallery/:id', galleryController.updateImage);
router.delete('/gallery/:id', galleryController.deleteImage);

module.exports = router;
