"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Wave extends Model {
    static associate(models) {
      // Define association with the User table
      Wave.belongsTo(models.usertable, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }

  Wave.init(
    {
      userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
      waveImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waveCaption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      waveStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Active",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Wave",
      timestamps: true, // Enable timestamps (createdAt and updatedAt)
      paranoid: true, // Enable soft deletes with deletedAt
      hooks: {
        beforeUpdate: async (Wave, options) => {
          if (preferences.changed("isDeleted") && Wave.isDeleted === true) {
            preferences.deletedAt = new Date();
          }
        },
      },      
    }
  );
  return Wave;
};