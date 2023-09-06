require('dotenv').config()
const Contact = require('../models/Contact');

// @desc Get all the contacts
// @route GET /contact
// @access private (based on your user routes)
const getContact = async (req, res) => {
    console.log("good")
    try {
        const contacts = await Contact.find().lean();
        if (!contacts?.length) {
            return res.status(200).json([]);  // Return an empty array with 200 OK status
        }
        res.json(contacts);
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return res.status(500).json({ message: "Server Error" });
    }
}

// @desc Create a new contact
// @route POST /contact
// @access private
const createContact = async (req, res) => {
    try {
        await Contact.deleteMany({});
        const { address, time, email, phone } = req.body;

        const newContact = new Contact({
            address,
            time,
            email,
            phone
        });

        const savedContact = await newContact.save();

        res.status(201).json({
            message: "New contact created",
            contact: savedContact
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while creating the contact:",
            error
        });
    }
}

// @desc Update a contact
// @route PATCH /contact/:id
// @access private 
const updateContact = async (req, res) => {
    try {
        const { address, time, email, phone } = req.body;

        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found!"
            });
        }

        if (address) contact.address = address;
        if (time) contact.time = time;
        if (email) contact.email = email;
        if (phone) contact.phone = phone;

        const updatedContact = await contact.save();

        res.json({
            message: "Contact updated",
            contact: updatedContact
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

// @desc Delete a contact
// @route DELETE /contact/:id
// @access private 
const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);

        if (!contact) {
            return res.status(404).json({
                message: "Contact not found!"
            });
        }

        await contact.deleteOne();

        res.json({
            message: `Contact with ID ${req.params.id} deleted`
        });
    } catch (error) {
        return res.status(500).json({
            message: "Server Error",
            error
        });
    }
}

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact
}
