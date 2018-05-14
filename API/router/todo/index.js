const express = require('express');
const router = express.Router();
const ctrl = require('./controller');

router.get('/',ctrl.find); //get이 작동하면 ctrl의 find가 작동
router.get('/:id',ctrl.findOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update); //id를 뽑아쓸수있다.
router.delete('/:id', ctrl.destroy);


module.exports = router;
