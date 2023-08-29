const mongoose = require('mongoose')


const contactSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true 
    },
    time: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true 
    },
    phone: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Contact', contactSchema)