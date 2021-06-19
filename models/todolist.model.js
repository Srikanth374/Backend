const mongoose = require('mongoose');

const todolistSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: 'To Start'
    },
}, {
    timestamps: true
})
module.exports = mongoose.model('todolist', todolistSchema);