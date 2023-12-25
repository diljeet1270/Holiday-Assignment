'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
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
    modelName: 'User',
    timestamps: true, // Enable timestamps (createdAt and updatedAt)
    paranoid: true, // Enable soft deletes with deletedAt
    hooks: {
      beforeUpdate: async (user, options) => {
        if (user.changed('isDeleted') && user.isDeleted === 1) {
          user.deletedAt = new Date();
        }
      },
    },
  });
  return User;
};