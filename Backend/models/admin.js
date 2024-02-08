'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admin.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
    },
    deletedAt: {
      type:  DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'admin',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletes with deletedAt
    hooks: {
      beforeUpdate: (user, options) => {
        // Check if status changed from 1 to 0
        if (admin.changed('status') && admin.status === '0') {
          // Set isDeleted to true and set deletedAt to current date and time
          user.isDeleted = true;
          user.deletedAt = new Date();
        }
      },
    },
  });
  return admin;
};