'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PersonalDetails.init({
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    socialSecurityNumber: DataTypes.STRING,
    social: DataTypes.STRING,
    kids: DataTypes.INTEGER,
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 1 // Default value for status
    },
    isDeleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0 // Default value for isDeleted
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'PersonalDetails',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletes with deletedAt
    hooks: {
      beforeUpdate: async (user, options) => {
        if (PersonalDetails.changed('isDeleted') && user.isDeleted === 1) {
          user.deletedAt = new Date();
        }
      },
    },
  });
  return PersonalDetails;
};