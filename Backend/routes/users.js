var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
/* GET users listing. */
router.post('/signup', authController.signup);

module.exports = router;
