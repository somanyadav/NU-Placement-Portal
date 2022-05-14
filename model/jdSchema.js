const mongoose = require("mongoose");

const jdSchema = new mongoose.Schema({
  compName: {
    type: String,
  },
  compUrl: {
    type: String,
  },
  description: {
    type: String,
  },
  mode: {
    type: String,
  },
  consent: {
    type: String,
  },
  role: {
    type: String,
  },
  location: {
    type: String,
  },
  stipend: {
    type: String,
  },
  date: {
    type: String,
  },
  process: {
    type: String,
  },
  qualification: {
    type: String,
  },
  gradDate: {
    type: String,
  },
  positions: {
    type: String,
  },
  jd: {
    type: String,
  },
  others: {
    type: String,
  },
  details: {
    type: String,
  },
});

// ENTER COLLECTION NAME HERE
const jdUser = mongoose.model("JD", jdSchema);

// EXPORT IT AS MODULE, SO THAT YOU CAN USE IT EVERYWHERE
module.exports = jdUser;
