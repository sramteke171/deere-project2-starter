"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Sachin Ramteke",
          username: "sachin",
          password: "ramteke",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Brad Smith",
          username: "brad",
          password: `smith`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Craig Adams",
          username: "craig",
          password: "adams",
          createdAt: new Date(),
          updatedAt: new Date(),
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
