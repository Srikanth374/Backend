const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/review.ctrl');

router.post('/create', reviewCtrl.insert);

module.exports = router;