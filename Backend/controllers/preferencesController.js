const preferencesService = require("../services/preferencesService");
const {validatePreferencesUpdate} = require("../utils/validators");
const { verifyToken } = require("../utils/tokenUtil");

exports.updatePreferences = async (req, res) => {
  try {
    // Verify the token to get user information
    verifyToken(req, res, async (decoded) => {
      // Extract user ID from the decoded token
      const { id } = req.user;
      // Validate the preferences data
      const { error } = validatePreferencesUpdate(req.body);
      if (error) {
        return res.json({
          status: "error",
          message: error.details[0].message,
          data: null,
        });
      }

      // Check if there is existing data for the user in Preferences
      const existingPreferences = await preferencesService.getPreferences(id);

      if (existingPreferences) {
        // If data exists, perform an update
        await preferencesService.updatePreferences(id, req.body);
      } else {
        // If no data exists, perform an insert
        await preferencesService.createPreferences(id, req.body);
      }
      res.status(200).json({ 
        status: "success",
        message: 'Preferences updated successfully',
        data: null,
       });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
      data: null,
    });
  }
};
