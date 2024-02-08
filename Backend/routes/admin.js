var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');
/* GET users listing. */
router.post('/v1/signup', adminController.Signup);
router.post('/v1/login', adminController.Login);
module.exports = router;
