var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController');
/* GET users listing. */
router.post('/v1/signup', adminController.Signup);
router.post('/v1/login', adminController.Login);
router.get('/v1/count-user', adminController.countUsers);
router.get('/v1/active-user', adminController.activeUsers);
router.get('/v1/count-waves', adminController.countWaves);
module.exports = router;
