const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// INDEX ROUTE - GET ALL THE USERS
router.get("/", (req, res) => {
  UserModel.findAll().then((users) => {
    res.render("users/index.ejs", {
      users: users,
    });
  });
});

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

// edit - changes values
router.put("/profile/:id", (req, res) => {
  UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  }).then((user) => {
    res.redirect(`/usersC/profile/${req.params.id}`);
  });
});

router.delete("/:id", (req, res) => {
  UserModel.destroy({ where: { id: req.params.id } }).then(() => {
    res.redirect("/usersC");
  });
});

module.exports = router;
