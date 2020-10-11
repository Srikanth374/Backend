const mongoose = require('mongoose');

module.exports = mongoose.model('product', {
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    price: {
        type: String,
        required: [true, 'Price is required']
    },
    specifications: {
        type: [String],
    },
    category: {
        type: String,
        required: [true, 'Mobile is required'],
        enum: ['Mobiles', 'Washing Machines']
    },
    imgSrc: {
        type: String,
        required: [true, 'Img Src is required'],
    },
    inStock: {
        type: String,
        default: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    reviewIds: [{type: mongoose.Schema.ObjectId, ref: 'review'}]
});