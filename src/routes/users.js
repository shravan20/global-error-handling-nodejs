var express = require('express');
var router = express.Router();
var userController =  require('../controllers/users')


/* GET users API */
// call the controller function or pass the control to the controller
router.get('/getUser', userController.getUser);





module.exports = router;
