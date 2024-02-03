var express = require('express');
var router = express.Router();
var upload = require('../utils/uploadFile');
const profileController = require('../controllers/profileController');

router.put('/v1/basicDetails', profileController.updateBasicDetails);
router.put('/v1/personalDetails', profileController.updatePersonalDetails);
router.get('/v1/basicDetails', profileController.getBasicDetails);
router.get('/v1/personalDetails', profileController.getPersonalDetails);
router.put('/v1/profilePicture', upload.single('profileIcon'), profileController.updateProfilePicture);
router.get("/v1/profilePicture", profileController.getProfilePic);
module.exports = router;
