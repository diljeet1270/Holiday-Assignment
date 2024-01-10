var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

router.put('/v1/basicDetails', profileController.updateBasicDetails);
router.put('/v1/personalDetails', profileController.updatePersonalDetails);
router.get('/v1/basicDetails', profileController.getBasicDetails);
router.get('/v1/personalDetails', profileController.getPersonalDetails);
module.exports = router;
