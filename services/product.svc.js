const productModel = require('../models/product.model');

class ProductService {
    getAll(){
        return productModel.find();
    }
    getById(id) {
        return productModel.findById(id).populate('reviews');
    }
    getByCategory(category) {
        return productModel.find({category});
    }
    getByName(name) {
        return productModel.find({name});
    }
    add(data) {
        const product = new productModel(data);
        return product.save();
    }
    update(data, id) {
        return productModel.findByIdAndUpdate(id, {
            $set: {
                name: data.name,
                price: data.price,
                specifications: data.specifications,
                category: data.category,
                inStock: data.inStock,
                imgSrc: data.imgSrc
            }
        }, {
            new: true
        })
    }
    delete(id) {
        return productModel.findByIdAndRemove(id);
    }
}

module.exports = new ProductService();