const express = require('express');
const router = express.Router();
const orderCtrl = require('../controllers/order.ctrl');
const requestValidator = require('../validators/requestValidator');

router.post('/create', requestValidator.requestValidator, orderCtrl.insert);
router.post('/generate-orderId', orderCtrl.createOrderId);
router.get('/:userId', orderCtrl.orderByUserId);

module.exports = router;