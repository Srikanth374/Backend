const orderModel = require('../models/order.model');

class OrderService {
    create(data) {
        return orderModel.create(data);
    }
    byUserId(id) {
        return orderModel.find({userId: id});
    }
}

module.exports = new OrderService();