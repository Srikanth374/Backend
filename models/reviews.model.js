const mongoose = require('mongoose');

const reviewModel = mongoose.model('review', {
    productId: {
        type: String
    },
    userId: {
        type: String
    },
    rating: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    }
});



module.exports = reviewModel;