const express = require("express");
const router = express.Router();

const ItemModel = require("../models").Item;
// const UserModel = require("../models").User;
// const Team = require("../models").Team;

// INDEX ROUTE - GET ALL THE DESIGN ITEMS (sofa, chair, side table, carpet, coffee table, wallPainting)
// it will be used for getting all items - the first time, while deleting, and Editing
router.get("/", (req, res) => {
  ItemModel.findAll().then((items) => {
    res.render("users/item.ejs", {
      items: items,
    });
  });
});

//NEW ROUTE - Send Empty form
router.get("/new", (req, res) => {
  res.render("users/newItem.ejs");
});

// // SHOW ROUTE - GET ONE Room
// router.get("/:id", (req, res) => {
//   RoomModel.findByPk(req.params.id).then((room) => {
//     res.render("users/room.ejs", {
//       room: room,
//     });
//   });
// });

//POST ROUTE -Takes Form data & creates a new Item
router.post("/", (req, res) => {
  ItemModel.create(req.body).then((newItem) => {
    res.redirect("/itemsC");
  });
});

// //DESIGN
// router.get("/:id/design", function (req, res) {
//   RoomModel.findByPk(req.params.id).then((foundRoom) => {
//     res.render("users/design.ejs", {
//       room: foundRoom,
//     });
//   });
// });

// //showItems
// router.get("/showSofa", (req, res) => {
//   ItemModel.findAll().then((items) => {
//     // res.render("users/room.ejs", {
//     res.render("users/sofa.ejs", {
//       items: items,
//     });
//   });
// });

//edit - we need to first get the values before edit
router.get("/:id/edit", function (req, res) {
  ItemModel.findByPk(req.params.id).then((foundItem) => {
    res.render("users/itemEdit.ejs", {
      item: foundItem,
    });
  });
});

// //edit - changes values
// router.put("/:id", (req, res) => {
//   ItemModel.update(req.body, {
//     where: { id: req.params.id },
//     returning: true,
//   }).then((item => {
//     res.redirect("/itemsC");
//   });
// });

//delete Item
router.delete("/:id", (req, res) => {
  ItemModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/itemsC");
  });
});

module.exports = router;
