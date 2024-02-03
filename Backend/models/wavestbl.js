'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class wavestbl extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  wavestbl.init({
    userId: DataTypes.INTEGER,
    waveImage: DataTypes.STRING,
    waveMessage: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1, // Set default value of status to 1
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'wavestbl',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletes with deletedAt
    hooks: {
      // Hook to update deletedAt when status changes from 1 to 0
      beforeUpdate: async (wavestbl, options) => {
        if (wavestbl.changed('status') && wavestbl.status === 0) {
          wavestbl.deletedAt = new Date();
        }
      }
    }
  });

  return wavestbl;
};
