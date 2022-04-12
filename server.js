const dotenv = require("dotenv").config();
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const req = require("express/lib/request");
const res = require("express/lib/response");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.SERVER_PORT;

// Mongo DB Connection
// STARTS HERE

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`MongoDB connected`);
  })
  .catch((err) => console.log(err));

// Mongo DB Connection
// ENDS HERE

// MIDDLEWARES

app.use(cors());
app.use(express.json({ extended: false }));

// Linking router files to make our route easy
app.use(require("./router/routes"));

// LISTEN REQUEST

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`.red.bold);
});
