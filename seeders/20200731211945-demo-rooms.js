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
      "Rooms",
      [
        {
          name: "Room1",
          img: "/images/r1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Room2",
          img: "/images/r2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Room3",
          img: "/images/r3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Room4",
          img: "/images/r4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Room5",
          img: "/images/r5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Room6",
          img: "/images/r6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
        },
        {
          name: "Room7",
          img: "/images/r7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
        },
        {
          name: "Room8",
          img: "/images/r8.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
        },
        {
          name: "Room9",
          img: "/images/r1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Room10",
          img: "/images/r2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Room11",
          img: "/images/r3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Room12",
          img: "/images/r4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Room13",
          img: "/images/r5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Room14",
          img: "/images/r6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
        },
        {
          name: "Room15",
          img: "/images/r7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
        },
        {
          name: "Room16",
          img: "/images/r8.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
        },
        {
          name: "Room17",
          img: "/images/r1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Room18",
          img: "/images/r2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Room19",
          img: "/images/r3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Room20",
          img: "/images/r4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Room21",
          img: "/images/r5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Room22",
          img: "/images/r6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
        },
        {
          name: "Room23",
          img: "/images/r7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
        },
        {
          name: "Room24",
          img: "/images/r8.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
        },
        {
          name: "Room25",
          img: "/images/r1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Room26",
          img: "/images/r2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Room27",
          img: "/images/r3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Room28",
          img: "/images/r4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Room29",
          img: "/images/r5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Room30",
          img: "/images/r6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
        },
        {
          name: "Room31",
          img: "/images/r7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
        },
        {
          name: "Room32",
          img: "/images/r8.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
        },
        {
          name: "Room33",
          img: "/images/r1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          name: "Room34",
          img: "/images/r2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          name: "Room35",
          img: "/images/r3.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
        {
          name: "Room36",
          img: "/images/r4.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 4,
        },
        {
          name: "Room37",
          img: "/images/r5.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 5,
        },
        {
          name: "Room38",
          img: "/images/r6.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 6,
        },
        {
          name: "Room39",
          img: "/images/r7.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 7,
        },
        {
          name: "Room40",
          img: "/images/r8.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 8,
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
