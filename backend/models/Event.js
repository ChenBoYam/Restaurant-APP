const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true 
    },
    path: {
        type: String,
        required: true 
    }
})

module.exports = mongoose.model('Event', eventSchema)