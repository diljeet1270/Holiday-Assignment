const express = require('express');
const upload = require('../utils/waveUpload');
const waveController = require('../controllers/waveController')
const router = express.Router();


router.post('/v1/wave', upload.single('image'),waveController.createWave);
router.get('/v1/waves',waveController.getWaves);
router.put('/v1/wave',waveController.changeWaveStatus);
module.exports = router;
