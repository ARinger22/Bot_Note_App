const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteData = new Schema({
    title:{
        type : String,
        requied: true,
    },
    description: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('notes', noteData);