const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

// Mongo DB Connection
// STARTS HERE

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`MongoDB connected`);
  })
  .catch((err) => console.log(err));

// User Schema
const User = require("../model/userSchema");

// JD Schema
const jdUser = require("../model/jdSchema");

// Mongo DB Connection
// ENDS HERE

router.get("/", (req, res) => {
  res.send(`Hello world from router`);
});

router.post("/register", (req, res) => {
  const {
    compName,
    compUrl,
    description,
    mode,
    consent,
    role,
    location,
    stipend,
    date,
    process,
    qualification,
    gradDate,
    positions,
    jd,
    others,
    details,
  } = req.body;

  if (
    !compName ||
    !compUrl ||
    !description ||
    !mode ||
    !consent ||
    !role ||
    !location ||
    !stipend ||
    !date ||
    !process ||
    !qualification ||
    !gradDate ||
    !positions ||
    !jd ||
    !others ||
    !details
  ) {
    return res.status(422).json({ error: "Please fill all the fields" });
  }

  // User.findOne({ email: email }).then((userExist) => {
  //   if (userExist) {
  //     return res.status(422).json({ error: "Already exists" });
  //   }
  // });

  jdUser.findOne({ compName: compName }).then((userExist) => {
    if (userExist) {
      return res.status(422).json({ error: "Already exists" });
    }
  });

  // const user = new User({ name, email });

  const user = new jdUser({
    compName,
    compUrl,
    description,
    mode,
    consent,
    role,
    location,
    stipend,
    date,
    process,
    qualification,
    gradDate,
    positions,
    jd,
    others,
    details,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({ message: "User registered" });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

// FETCHING DOCUMENTS HERE
router.get("/browsejd", (req, res) => {
  jdUser.find().then((records) => {
    if (records) {
      res.send(records);
    }
  });
});

module.exports = router;
