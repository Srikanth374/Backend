const reviewModel = require('../models/reviews.model');

class ReviewService {
    create(data) {
        return reviewModel.create(data);
    }
    byProductId(id) {
        return reviewModel.find({productId: id}, {__v: 0, _id: 0, userId: 0, productId: 0, createdAt: 0});
    }
}

module.exports = new ReviewService();