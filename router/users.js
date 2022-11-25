const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user')

router.post('/user', usercontroller.store) //create
router.get('/users', usercontroller.index) //read
router.get('/user/:id',usercontroller.show) //read by id
router.put('/user/:id',usercontroller.update) //update
router.delete('/user/:id',usercontroller.delete) //delete

module.exports = router;