"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Preferences extends Model {
    static associate(models) {
      // Define association with the User table
      Preferences.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }

  Preferences.init(
    {
      language: DataTypes.STRING,
      breakfast: DataTypes.TIME,
      lunch: DataTypes.TIME,
      dinner: DataTypes.TIME,
      wakeTime: DataTypes.TIME,
      bedTime: DataTypes.TIME,
      weight: DataTypes.STRING,
      height: DataTypes.STRING,
      bloodGlucose: DataTypes.STRING,
      cholestrol: DataTypes.STRING,
      bloodPressure: DataTypes.STRING,
      distance: DataTypes.STRING,
      systemEmails: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      memberServiceEmails: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      sms: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      phoneCall: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
      post: {
        type: DataTypes.BOOLEAN,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Preferences",
    }
  );

  return Preferences;
};
