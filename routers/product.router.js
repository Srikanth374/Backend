const express = require('express');
const router = express.Router();
const multer = require('multer');
const productCtrl = require('../controllers/product.ctrl');

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        let filename = Date.now() + '-' + file.originalname;
        req.body.imgSrc = filename;
        cb(null, filename);
    }
});

const uploadImage = multer({storage});

router.post('/', uploadImage.single('image'), productCtrl.insert);
router.get('/category/', productCtrl.getByCategory);
router.get('/', productCtrl.get);
router.get('/:id', productCtrl.getById);

module.exports = router;