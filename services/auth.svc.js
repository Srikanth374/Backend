const userModel = require('../models/user.model');

class UserService {
    create(data) {
        const user = new userModel(data);
        return user.save();
    }
    getById(id) {
        return userModel.findById(id);
    }
    getByMobile(mobile) {
        return userModel.findOne({mobile});
    }
    getByEmail(email) {
        return userModel.findOne({email});
    }
    updateUser(id, data) {
        return userModel.findByIdAndUpdate(id, {
            $set: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile
            }
        }, {new: true});
    }
    update(data) {
        return userModel.findByIdAndUpdate(data.id, {
            $set: {
                resetPasswordToken: data.resetPasswordToken,
                resetPasswordExpiry: data.resetPasswordExpiry
            }
        }, {new: true});
    }
    updatePassword(data) {
        return userModel.findByIdAndUpdate(data.id, {
            $set: {
                resetPasswordToken: data.resetPasswordToken,
                resetPasswordExpiry: data.resetPasswordExpiry,
                password: data.password
            },
        }, {
            fields: {__v: 0, resetPasswordToken: 0, resetPasswordExpiry: 0, createdAt: 0, password: 0},
            new: true
        });
    }
    byUserId(id) {
        return userModel.findById(id, {_id: 0, __v: 0, password: 0, createdAt: 0});
    }
    users() {
        return userModel.find();
    }

}

module.exports = new UserService();