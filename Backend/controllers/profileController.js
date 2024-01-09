const { verifyToken } = require("../utils/tokenUtil");
const {validateBasicDetails,validatePersonalDetails} = require("../utils/validators");
const profileServices = require('../services/profileService');

// controller to update the Bacic details if already exists other wise create the details
exports.updateBasicDetails = async(req, res) => {
    try {
        verifyToken(req, res, async (decoded) => {
            let userId = decoded.userId;
            // Validate the basic details of the user
            const { error } = validateBasicDetails(req.body);
      if (error) {
        return res.json({
          status: "error",
          message: error.details[0].message,
          data: null,
        })
      }
      const entryExist = await profileServices.getBasicDetails(userId);
      if(entryExist){
        await profileServices.updateBasicDetails(req.body, userId);
      }else {
        await profileServices.createBasicDetails(req.body, userId);
      }
      res.status(200).json({
        status:"success",
        message :"Basic details updated successfully.",
        data : data,
      });

    })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error",
            data: null,
          });
    }
};

// controller to update the Personal details if already exists other wise create the details
exports.updatePersonalDetails = async(req, res) =>{
    try {
        verifyToken(req, res, async (decoded) => {
            let userId = decoded.userId;
            // Validate the basic details of the user
            const { error } = validatePersonalDetails(req.body);
      if (error) {
        return res.json({
          status: "error",
          message: error.details[0].message,
          data: null,
        })
      }
      const entryExist = await profileServices.getPersonalDetails(userId);
      if(entryExist){
        await profileServices.updatePersonalDetails(req.body, userId);
      }else {
        await profileServices.createPersonalDetails(req.body, userId);
      }
      res.status(200).json({
        status:"success",
        message :"Prosonal details updated successfully.",
        data : data,
      });

    })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "Internal server error",
            data: null,
          });
    }

}

//Controller to get the Basic details which already exists for prefilling the form data
exports.getBasicDetails = async(req, res) => {
    try {
        verifyToken(req, res, async(decoded) => {
            const userId= decoded.userId;

            const data =  await profileServices.getBasicDetails(userId);
            if(!data) {
                return res.status(401).json({
                    status: 'error',
                    message:'User not found.',
                    data: null,
                    })
            }
            else {
                return res.status(200).json({
                    status: 'success',
                    message:'Basic Details fetched Successfully.',
                    data: data,
                })
            }

        })
    }
    catch (error) {
        console.log(error);
        return res.json({
            status:"error",
            message: "Internal Server error",
            data: null,
        });
     }
}

//Controller to get the Personal details which already exists for prefilling the form data
exports.getPersonalDetails = async(req, res) => {
    try {
        verifyToken(req, res, async(decoded) => {
            const userId= decoded.userId;

            const data =  await profileServices.getPersonalDetails(userId);
            if(!data) {
                return res.status(401).json({
                    status: 'error',
                    message:'User not found.',
                    data: null,
                    })
            }
            else {
                return res.status(200).json({
                    status: 'success',
                    message:'Personal Details fetched Successfully.',
                    data: data,
                })
            }

        })
    }
    catch (error) {
        console.log(error);
        return res.json({
            status:"error",
            message: "Internal Server error",
            data: null,
        });
     }
}