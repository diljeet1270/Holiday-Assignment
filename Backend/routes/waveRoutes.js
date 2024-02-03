const express = require('express');
const upload = require('../utils/upload');
const { storeWaveData } = require('../controllers/waveController');

const router = express.Router();

router.post('/upload', upload.single('waveImage'), async (req, res) => {
  const { caption } = req.body;
  const imagePath = req.file.path;

  await storeWaveData(imagePath, caption);

  res.json({ message: 'File uploaded successfully.' });
});

module.exports = router;
