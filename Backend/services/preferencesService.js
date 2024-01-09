const { Preferences } = require("../models");

const getPreferences = async (userId) => {
  
  return await Preferences.findOne({ where: { userId } });
};

const updatePreferences = async (userId, data) => {
  return await Preferences.update(data, { where: { userId } });
};

const createPreferences = async (userId, data) => {
  return await Preferences.create({...data, userId});
};
module.exports = {
  getPreferences,
  updatePreferences,
  createPreferences,
};
