const mongoose = require('mongoose')


const menuSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    price: {
        type: String,
        required: true 
    },
    note: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    imgName: {
        type: String,
        required: true
    },
    imgPath: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', menuSchema)