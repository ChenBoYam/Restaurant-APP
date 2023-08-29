require('dotenv').config();
const About = require('../models/About');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './uploads/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

const getAllAboutEntries = async (req, res) => {
    try {
        const entries = await About.find().lean();
        res.json(entries);
    } catch (error) {
        console.error("Error fetching about entries:", error);
        return res.status(500).json({ message: "Server Error" });
    }
}

const createAboutEntry = async (req, res) => {
    try {
        const { title, subTitle, bulletPoints, intro } = req.body;
        const { path: imgPath, originalname: imgName } = req.file;

        const newEntry = new About({
            title,
            subTitle,
            bulletPoints,
            intro,
            imgName,
            imgPath
        });

        const savedEntry = await newEntry.save();
        res.status(201).json({
            message: `New about entry titled ${title} created`,
            entry: savedEntry
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while creating the about entry:",
            error
        });
    }
}

const updateAboutEntry = async (req, res) => {
    try {
        const { title, subTitle, bulletPoints, intro, imgName, imgPath } = req.body;

        const entry = await About.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({
                message: "About entry not found!"
            });
        }

        if (title) entry.title = title;
        if (subTitle) entry.subTitle = subTitle;
        if (bulletPoints) entry.bulletPoints = bulletPoints;
        if (intro) entry.intro = intro;
        if (imgName) entry.imgName = imgName;
        if (imgPath) entry.imgPath = imgPath;

        const updatedEntry = await entry.save();

        res.json({
            message: `About entry titled ${updatedEntry.title} updated`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

const deleteAboutEntry = async (req, res) => {
    try {
        const entry = await About.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({
                message: "About entry not found!"
            });
        }

        fs.unlinkSync(path.join("./", entry.imgPath)); 

        await entry.deleteOne();

        res.json({
            message: `About entry with ID ${req.params.id} deleted`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

module.exports = {
    getAllAboutEntries,
    createAboutEntry,
    updateAboutEntry,
    deleteAboutEntry,
    upload
}
