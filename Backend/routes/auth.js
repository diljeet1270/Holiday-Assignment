var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
const preferencesController = require('../controllers/preferencesController');
/* GET users listing. */
router.post('/v1/signup', authController.signup);
router.post('/v1/login', authController.login);
router.put('/v1/changepassword', authController.changePassword);
router.put('/v1/preferences', preferencesController.updatePreferences);
module.exports = router;
