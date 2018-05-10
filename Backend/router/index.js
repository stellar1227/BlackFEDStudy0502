const express = require('express');
const router = express.Router();
const todo = require('./todo');
router.get('/',(req, res) =>{
    res.send('<h1>웰컴 ! 하하하하 노드</h1>');
})

router.use('/todo', todo);

module.exports = router;
