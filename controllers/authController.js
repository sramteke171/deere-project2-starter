require("dotenv").config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../models").User;

// SIGN OUT ROUTE
router.get("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
});

// //check hot to move this into roomConroller.js
// // INDEX ROUTE - GET ALL THE Rooms
// router.get("/rooms", (req, res) => {
//   RoomModel.findAll().then((rooms) => {
//     // res.render("index.ejs", {
//     res.render("users/room.ejs", {
//       rooms: rooms,
//     });
//   });
// });

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
  res.render("users/signup.ejs");
});

// POST - CREATE NEW USER FROM SIGNUP
router.post("/signup", (req, res) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) return res.status(500).json(err);

    bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
      if (err) return res.status(500).json(err);
      req.body.password = hashedPwd;

      UserModel.create(req.body)
        .then((newUser) => {
          const token = jwt.sign(
            {
              username: newUser.username,
              id: newUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          res.redirect(`/usersC/profile/${newUser.id}`);
        })
        .catch((err) => {
          console.log(err);
          res.send(`err ${err}`);
        });
    });
  });
});

// GET LOGIN
router.get("/login", (req, res) => {
  // document.getElementById("animate-area").innerHTML =
  //   '<object type="type/html" data="users/login.ejs" ></object>';
  res.render("users/login.ejs");
  // res.render("users/index.ejs");
});

// POST LOGIN
router.post("/login", (req, res) => {
  UserModel.findOne({
    where: {
      username: req.body.username,
    },
  }).then((foundUser) => {
    if (foundUser) {
      bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
        if (match) {
          const token = jwt.sign(
            {
              username: foundUser.username,
              id: foundUser.id,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "30 days",
            }
          );
          console.log(token);
          res.cookie("jwt", token); // SEND A NEW COOKIE TO THE BROWSER TO STORE TOKEN
          res.redirect(`/usersC/profile/${foundUser.id}`);
        } else {
          return res.sendStatus(400);
        }
      });
    }
  });
});

module.exports = router;
