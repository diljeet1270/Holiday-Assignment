'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId:{
        type:Sequelize.INTEGER,
        references :{model:'Users',key:'id'},
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
      },
      language: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      breakfast: {
        type: Sequelize.TIME, // Corrected data type
        allowNull: true,
      },
      lunch: {
        type: Sequelize.TIME, // Corrected data type
        allowNull: true,
      },
      dinner: {
        type: Sequelize.TIME, // Corrected data type
        allowNull: true,
      },
      wakeTime: {
        type: Sequelize.TIME, // Corrected data type
        allowNull: true,
      },
      bedTime: {
        type: Sequelize.TIME, // Corrected data type
        allowNull: true,
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bloodGlucose: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cholestrol: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bloodPressure: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      distance: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      systemEmails: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      memberServiceEmails: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      sms: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      phoneCall: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      post: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: Sequelize.INTEGER,
        defaultValue: 1, // Default value for status
      },
      isDeleted: {
        type: Sequelize.INTEGER,
        defaultValue: 0, // Default value for isDeleted
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Preferences');
  }
};
