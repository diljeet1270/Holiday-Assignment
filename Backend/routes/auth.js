var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
/* GET users listing. */
router.post('/v1/signup', authController.signup);
router.post('/v1/login', authController.login);

module.exports = router;
