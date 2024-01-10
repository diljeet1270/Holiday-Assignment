'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BasicDetails extends Model {
    static associate(models) {
      BasicDetails.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }

  BasicDetails.init({
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    socialSecurityNumber: {
      type: DataTypes.INTEGER,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      validate: {
        is: /^[6-9]\d{9}$/,
      },
    },
    addressOne: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressTwo: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: DataTypes.INTEGER,
    isDeleted: DataTypes.BOOLEAN,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BasicDetails', // Change here to PascalCase
  });

  return BasicDetails;
};
