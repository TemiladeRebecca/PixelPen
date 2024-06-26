const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: ''
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Note', notesSchema);