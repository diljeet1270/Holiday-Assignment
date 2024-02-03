const { verifyToken } = require("../utils/tokenUtil");
const {validateBasicDetails,validatePersonalDetails} = require("../utils/validators");
const profileServices = require('../services/profileService');
const upload =  require('../utils/uploadFile');

// controller to update the Bacic details if already exists other wise create the details
exports.updateBasicDetails = async(req, res) => {
    try {
        verifyToken(req, res, async (decoded) => {
      const { id } = req.user;
            
            // Validate the basic details of the user
            const { error } = validateBasicDetails(req.body);
      if (error) {
        return res.json({
          status: "error",
          message: error.details[0].message,
          data: null,
        })
      }
      const entryExist = await profileServices.getBasicDetails(id);
      if(entryExist){
        await profileServices.updateBasicDetails(req.body, id);
      }else {
        await profileServices.createBasicDetails(req.body, id);
      }
      res.status(200).json({
        status:"success",
        message :"Basic details updated successfully.",
        data : null,
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
          const { id } = req.user;
            // Validate the basic details of the user
            const { error } = validatePersonalDetails(req.body);
      if (error) {
        return res.json({
          status: "error",
          message: error.details[0].message,
          data: null,
        })
      }
      const entryExist = await profileServices.getPersonalDetails(id);
      if(entryExist){
        await profileServices.updatePersonalDetails(req.body, id);
      }else {
        await profileServices.createPersonalDetails(req.body, id);
      }
      res.status(200).json({
        status:"success",
        message :"Prosonal details updated successfully.",
        data : null,
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
      const { id } = req.user;

            const data =  await profileServices.getBasicDetails(id);
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
          const { id } = req.user;
            const data =  await profileServices.getPersonalDetails(id);
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

// Controller to Update profile picture  of user

exports.updateProfilePicture = async (req, res) => {
    try {
        // Extract the file from the request
        const file = req.file;

        // Verify the token and process the request
        verifyToken(req, res, async (decoded) => {
            const { id } = req.user;
            
            // Update the profile picture using the profileServices
            const data = await profileServices.updateProfilePic(file, id);

            // Check if the profile picture was successfully updated
            if (!data) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Error found',
                    data: null,
                });
            } else {
                return res.status(200).json({
                    status: 'success',
                    message: 'Profile pic updated successfully.',
                    data: {
                        profilePic: `http://localhost:3001/${file.filename}`,
                    },
                });
            }
        });
    } catch (error) {
        console.log("Error in updating Profile Picture");
        console.log(error);
        return res.status(400).send({
            status: 'fail',
        });
    }
};

exports.getProfilePic = async (req, res) =>{
  try {
    verifyToken(req, res, async (decoded) => {
      let {id} = req.user;
      const data =await profileServices.getProfilePic(id);
      if (!data) {
        return res.status(401).json({
            status: 'error',
            message: 'Error found',
            data: null,
        });
    } else {
        console.log(data);
        return res.status(200).json({
            status: 'success',
            message: 'Profile pic fetched successfully.',
            data: {
              profilePic: `http://localhost:3001/${data.profilePic}`
            },
        });
    }
    })
  }
  catch(error){
    console.error(error);
  }
}
