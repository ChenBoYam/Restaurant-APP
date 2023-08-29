const mongoose = require('mongoose')


const aboutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    subTitle: {
        type: String,
        required: true 
    },
    bulletPoints: {
        type: [String],
        required: true
    },
    intro: {
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

module.exports = mongoose.model('About', aboutSchema)