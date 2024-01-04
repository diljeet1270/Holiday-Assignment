const { Preferences } = require("../models");

const getPreferences = async (userId) => {
  console.log("this is the type of userId",typeof(userId))
  return await Preferences.findOne({ where: { userId } });
};

const updatePreferences = async (data, userId) => {
  return await Preferences.update(data, { where: { userId } });
};

const createPreferences = async (data, userId) => {
  return await Preferences.create({userId, ...data });
};
module.exports = {
  getPreferences,
  updatePreferences,
  createPreferences,
};
