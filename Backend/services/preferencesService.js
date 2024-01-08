const { Preferences } = require("../models");

const getPreferences = async (userId) => {
  console.log("this is the type of userId",typeof(userId))
  return await Preferences.findOne({ where: { userId } });
};

const updatePreferences = async (userId, data) => {
  return await Preferences.update(data, { where: { userId } });
};

const createPreferences = async (userId, data) => {
  console.log(userId,"this is userId")
  console.log(data,"this is data");
  return await Preferences.create({...data, userId});
};
module.exports = {
  getPreferences,
  updatePreferences,
  createPreferences,
};
