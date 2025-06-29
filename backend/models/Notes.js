const mongoose = require('mongoose');

const NotesSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        typr: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('notes', NotesSchema);