"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sofa_img: {
        type: Sequelize.STRING,
      },
      chair_img: {
        type: Sequelize.STRING,
      },
      stable_img: {
        type: Sequelize.STRING,
      },
      ctable_img: {
        type: Sequelize.STRING,
      },
      carpet_img: {
        type: Sequelize.STRING,
      },
      painting_img: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Items");
  },
};
