const {verifyToken} = require("../utils/tokenUtil.js");
const WaveService = require('../services/waveSerice');

exports.createWave = async (req, res)=>{
  try {
    verifyToken(req, res, async () => {
      const {id}  = req.user;
      console.log("this is id",id);
      const file = req.file;
      if (!file) {
        return res.status(400).send({
          error: "You must select a file to upload."
        });
      }
      const values = {
        userId: id,
        waveImage: file.filename,
        waveMessage: req.body.message,
    };
    const wave  = await WaveService.createWave(values);
    if (!wave) {
      return res.status(401).json({
          status: 'error',
          message: 'Error found',
          data: null,
      });
  } else {
      return res.status(200).json({
          status: 'success',
          message: 'Wave created.',
          data: {
          },
      });
  }

    })
  }
  catch (error) {
    console.error(error);
  }

}