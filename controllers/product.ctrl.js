const productService = require('../services/product.svc');
const reviewService = require('../services/reviews.svc');
const constants = require('../constants');
const config = require('../config');

class ProductCtrl {
    async get(req, res) {
        try {
            const products = await productService.getAll();
            // products.map(product => {
            //     product.imgSrc = `${req.protocol}://${req.hostname}:${config.portNo}/${product.imgSrc}`;
            // });
            if (products) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({data: products});
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Products not found' });    
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async getById(req, res) {
        try {
            const id = req.params.id;
            const product = await productService.getById(id);
            console.log(product);
            const reviews = await reviewService.byProductId(id);
            const jsonProduct = product.toJSON();
            jsonProduct.reviews = reviews;
            // jsonProduct.avgRating = 
            // jsonProduct.imgSrc = `${req.protocol}://${req.hostname}:${config.portNo}/${product.imgSrc}`;
            if (jsonProduct) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({data: jsonProduct});
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Product not found' });    
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
    async getByCategory(req, res) {
        try {
            const category = req.query.category;
            console.log(category);
            const products = await productService.getByCategory(category);
            products.map(product => {
                product.imgSrc = `${req.protocol}://${req.hostname}:${config.portNo}/${product.imgSrc}`;
            });
            if (products) {
                res.status(constants.STATUS_CODES.SUCCESS);
                res.json({data: products});
            } else {
                res.status(constants.STATUS_CODES.NOT_FOUND);
                res.send({ error: 'not_found', errorDescription: 'Product not found' });    
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }

    }
    async insert(req, res) {
        try {
            const product = await productService.getByName(req.body.name);
            if (product && product.length > 0) {
                res.status(constants.STATUS_CODES.CONFLICT);
                res.send({ error: 'conflict', errorDescription: 'Product already exist' }); 
            } else {
                const insertedProduct = await productService.add(req.body);
                res.status(constants.STATUS_CODES.CREATED);
                res.json({data: insertedProduct});
            }
        } catch(err) {
            console.log(err);
            res.status(constants.STATUS_CODES.EXCEPTION)
            res.send({ error: 'server_error', errorDescription: err });
        }
    }
}

module.exports = new ProductCtrl();