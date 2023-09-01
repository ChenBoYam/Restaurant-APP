const fs = require("fs");
const path = require("path");
const Menu = require("../models/Menu");
const multer = require("multer");



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = "./uploads/";
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

const getAllMenuEntries = async (req, res) => {
    try {
        const entries = await Menu.find().lean();
        res.json(entries);
    } catch (error) {
        console.error("Error fetching menu entries:", error);
        return res.status(500).json({ message: "Server Error" });
    }
};

const createMenuEntry = async (req, res) => {
    try {
        const parsedData = JSON.parse(req.body.data);
        const { title, price, note, imgName, category } = parsedData;
        const { path: imgPath } = req.file;

        const newEntry = new Menu({
            title,
            price,
            note,
            category,
            imgName,
            imgPath,
        });
        const savedEntry = await newEntry.save();
        console.log(newEntry);
        res.status(201).json({
            message: `New menu entry titled ${title} created`,
            entry: savedEntry,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error while creating the menu entry:",
            error,
        });
    }
};

const updateMenuEntry = async (req, res) => {
    try {
        const { title, price, note, imgName, category } = req.body;

        let imgPath = "";
        if (req.file) {
            imgPath = req.file.path;
        }

        const entry = await Menu.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({
                message: "Menu entry not found!",
            });
        }

        const oldImagePath = entry.imgPath;

        if (title) entry.title = title;
        if (price) entry.price = price;
        if (note) entry.note = note;
        if (category) entry.category = category;
        if (imgName) entry.imgName = imgName;
        if (imgPath) entry.imgPath = imgPath;

        const updatedEntry = await entry.save();

        if (oldImagePath && imgPath) {
            fs.unlink(path.join("./", oldImagePath), (err) => {
                if (err) console.error("Error deleting old image:", err);
            });
        }

        res.json({
            message: `Menu entry titled ${updatedEntry.title} updated`,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error,
        });
    }
};

const deleteMenuEntry = async (req, res) => {
    try {
        const entry = await Menu.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({
                message: "Menu entry not found!",
            });
        }

        fs.unlinkSync(path.join("./", entry.imgPath));

        await entry.deleteOne();

        res.json({
            message: `Menu entry with ID ${req.params.id} deleted`,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error,
        });
    }
};

module.exports = {
    getAllMenuEntries,
    createMenuEntry,
    updateMenuEntry,
    deleteMenuEntry,
    upload
};
