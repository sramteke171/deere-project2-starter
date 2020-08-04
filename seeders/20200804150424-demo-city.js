"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Cities",
      [
        {
          name: "New York",
        },
        {
          name: "Washington",
        },
        {
          name: "Chicago",
        },
        {
          name: "Dallas",
        },
        {
          name: "Tampa",
        },
        {
          name: "Atlanta",
        },
        {
          name: "Paris",
        },
        {
          name: "Rome",
        },
        {
          name: "Frankfurt",
        },
        {
          name: "London",
        },
        {
          name: "Shanghai",
        },
        {
          name: "Mumbai",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
