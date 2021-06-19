const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    imgSrc: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: Number
    }
});


const orderModel = mongoose.model('order', {
    userId: {
        type: String
    },
    totalPrice: {
        type: String,
        required: [true, 'Total price is required']
    },
    products: [productSchema],
    createdAt: {
        type: Date,
        default: new Date()
    },
    paymentId: {
        type: String,
    }
});



module.exports = orderModel;