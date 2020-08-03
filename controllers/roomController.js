const express = require("express");
const router = express.Router();
// Add Room model
const RoomModel = require("../models").Room;
// const UserModel = require("../models").User;
// const Team = require("../models").Team;

// INDEX ROUTE - GET ALL THE Rooms
// it will be used for getting all rooms - the first time, on delete, and Edit
router.get("/", (req, res) => {
  RoomModel.findAll().then((rooms) => {
    res.render("users/room.ejs", {
      rooms: rooms,
    });
  });
});

//NEW ROUTE - Send Empty form
router.get("/new", (req, res) => {
  res.render("users/newRoom.ejs");
});

// SHOW ROUTE - GET ONE Room
router.get("/:id", (req, res) => {
  RoomModel.findByPk(req.params.id).then((room) => {
    res.render("users/room.ejs", {
      room: room,
    });
  });
});

//POST ROUTE -Takes Form data & creates a new Room
router.post("/", (req, res) => {
  RoomModel.create(req.body).then((newRoom) => {
    res.redirect("/roomsC");
  });
});

//DESIGN
router.get("/:id/design", function (req, res) {
  RoomModel.findByPk(req.params.id).then((foundRoom) => {
    res.render("users/design.ejs", {
      room: foundRoom,
    });
  });
});

//edit - we need to first get the values before edit
router.get("/:id/edit", function (req, res) {
  RoomModel.findByPk(req.params.id).then((foundRoom) => {
    res.render("users/edit.ejs", {
      room: foundRoom,
    });
  });
});

//edit - changes values
router.put("/:id", (req, res) => {
  RoomModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((room) => {
    res.redirect("/roomsC");
  });
});

//fruit
// Fruit.update(req.body, {
//   where: { id: req.params.id },
//   returning: true,
// }).then((updatedFruit) => {
//   Season.findByPk(req.body.season).then((foundSeason) => {
//     Fruit.findByPk(req.params.id).then((foundFruit) => {
//       foundFruit.addSeason(foundSeason);
//       res.redirect("/fruits");
//     });
//   });
// });
// });

//delete Room
router.delete("/:id", (req, res) => {
  RoomModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/roomsC");
  });
});

module.exports = router;
