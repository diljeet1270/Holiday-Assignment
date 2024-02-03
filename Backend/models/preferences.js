"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Preferences extends Model {
    static associate(models) {
      // Define association with the User table
      Preferences.belongsTo(models.usertable, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }

  Preferences.init(
    {
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
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
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1, // Default value for status
      },
      isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0, // Default value for isDeleted
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Preferences",
      timestamps: true, // Enable timestamps (createdAt and updatedAt)
      paranoid: true, // Enable soft deletes with deletedAt
      hooks: {
        beforeUpdate: async (preferences, options) => {
          if (preferences.changed("isDeleted") && preferences.isDeleted === 1) {
            preferences.deletedAt = new Date();
          }
        },
      },      
    }
  );
  return Preferences;
};