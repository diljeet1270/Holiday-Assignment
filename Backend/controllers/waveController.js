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

exports.getWaves = async (req, res) => {
  try {
      verifyToken(req, res, async () => {
          const { id } = req.user;
          const waves = await WaveService.getWaves(id);

          let status = null;
          let message = null;
          let data = null;

          if (waves && waves.length > 0) {
              status = 200;
              message = "Wave list fetched successfully!";
              data = waves.map(wave => ({
                  id: wave.id,
                  waveImage: wave.waveImage,
                  waveMessage: wave.waveMessage,
                  status: wave.status,
              }));
          } else {
              status = 404;
              message = "No waves found!";
              data = [];
          }

          res.json({
              status,
              message,
              data,
          });
      });
  } catch (error) {
      console.error("Error in fetching waves:", error);
      res.status(500).json({
          status: 500,
          message: "Internal server error",
          data: null,
      });
  }
};

exports.changeWaveStatus = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      let status = req.body.status;
      let id = req.body.id;
      let wave = await WaveService.changeStatus(id, status);
      if (!wave) {
        res.json({
          status: 404,
          message: `Wave with the given ID not found`,
          data: null,
        })
        } else {
          res.json({
            status: 200,
            message: "wave status updated",
            data: wave,
          })
        }
    })

  }catch (err){
    console.error(err);
  }

}