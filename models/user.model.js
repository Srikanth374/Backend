const mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        validate: {
            validator: (value) => {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
            },
            message: (props) => {
                return `${props.value} is invalid format`
            }
        } 
    },
    mobile: {
        type: String,
        required: [true, 'Mobile is required'],
        unique: [true]
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpiry: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});