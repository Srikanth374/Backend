const express = require('express');
const router = express.Router();
const todolistCtrl = require('../controllers/todolist.ctrl');

router.post('/', todolistCtrl.insert);
router.get('/', todolistCtrl.get);
router.get('/:id', todolistCtrl.getById);
// router.put('/:id', todolistCtrl.getById);
router.delete('/:id', todolistCtrl.delete);
module.exports = router;