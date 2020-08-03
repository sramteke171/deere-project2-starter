require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const verifyToken = (req, res, next) => {
  let token = req.cookies.jwt;
  // COOKIE PARSER GIVES YOU A .cookies PROP, WE NAMED OUR TOKEN jwt

  console.log("Cookies: ", req.cookies.jwt);

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
    if (err || !decodedUser) {
      return res.status(401).json({ error: "Unauthorized Request" });
    }
    req.user = decodedUser;
    // ADDS A .user PROP TO REQ FOR TOKEN USER
    console.log(decodedUser);

    next();
  });
};

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.render("users/index.ejs");
});

app.use("/authC", require("./controllers/authController.js"));
app.use("/roomsC", require("./controllers/roomController.js"));
app.use("/itemsC", require("./controllers/itemController.js"));
app.use("/usersC", require("./controllers/usersController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
