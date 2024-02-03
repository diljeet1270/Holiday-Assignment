'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usertable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  usertable.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    socialSecurityNumber: DataTypes.STRING,
    addressOne: DataTypes.STRING,
    addressTwo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    dob: DataTypes.STRING,
    gender: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    social: DataTypes.STRING,
    kids: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: '1' // Default value of status is '1'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false // Default value of isDeleted is false
    },
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'usertable',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletes with deletedAt
    hooks: {
      beforeUpdate: (user, options) => {
        // Check if status changed from 1 to 0
        if (user.changed('status') && user.status === '0') {
          // Set isDeleted to true and set deletedAt to current date and time
          user.isDeleted = true;
          user.deletedAt = new Date();
        }
      },
    },
  });
  return usertable;
};