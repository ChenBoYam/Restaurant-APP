const mongoose = require('mongoose')


const gallerySchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true 
    },
    path: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Gallery', gallerySchema)