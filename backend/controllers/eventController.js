// EventController.js
require('dotenv').config()
const Event = require('../models/Event');
const multer = require('multer');

const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/';
        // Check if directory exists, if not, create it
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        cb(null, dir);
    },
    eventName: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// @desc Get all the images
// @route GET /event
// @access private (based on your user routes)
const getAllImages = async (req, res) => {
    try {
        const images = await Event.find().lean();
        if (!images?.length) {
            return res.status(200).json([]);  // Return an empty array with 200 OK status
        }
        res.json(images);
    } catch (error) {
        console.error("Error fetching images:", error);
        return res.status(500).json({ message: "Server Error" });
    }
}


// @desc Create a new image entry
// @route POST /event
// @access private
const createImage = async (req, res) => {
    try {
        console.log("event controller");
        // Multer adds a file object to the request. You can extract path and eventName from there.
        const { path } = req.file;
        const eventName = req.body.eventName;

        // Create a new image entry with eventName and path
        const newImage = new Event({
            eventName,  // this will store the new file name (timestamp + originalname)
            path       // this will store the path of the uploaded file
        });

        const savedImage = await newImage.save();
        res.status(201).json({
            message: `New image entry ${eventName} created`,
            image: savedImage
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while creating the image:",
            error
        });
    }
}


// @desc Update an image entry
// @route PATCH /event/:id
// @access private 
const updateImage = async (req, res) => {
    try {
        const { eventName, path } = req.body;

        const image = await Event.findById(req.params.id);

        if (!image) {
            return res.status(404).json({
                message: "Image entry not found!"
            });
        }

        if (eventName) image.eventName = eventName;
        if (path) image.path = path;

        const updatedImage = await image.save();

        res.json({
            message: `Image entry ${updatedImage.eventName} updated`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

// @desc Delete an image entry
// @route DELETE /event/:id
// @access private 
const deleteImage = async (req, res) => {
    try {
        const image = await Event.findById(req.params.id);

        if (!image) {
            return res.status(404).json({
                message: "Image entry not found!"
            });
        }

        // Delete the actual image file from the server
        fs.unlinkSync(path.join("./", image.path)); // Modify the path as per your directory structure

        await image.deleteOne();

        res.json({
            message: `Image entry with ID ${req.params.id} deleted`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

module.exports = {
    getAllImages,
    createImage,
    updateImage,
    deleteImage,
    upload
}
