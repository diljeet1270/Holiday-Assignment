const {Wave} = require('../models');

const storeWaveData = async (imagePath, caption) => {
  try {
    await Wave.create({
      waveImage: imagePath,
      waveCaption: caption,
    });

    console.log('Wave data stored successfully.');
  } catch (error) {
    console.error('Error storing wave data:', error);
  }
};

module.exports = { storeWaveData };
