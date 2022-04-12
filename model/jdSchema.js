const mongoose = require("mongoose");

const jdSchema = new mongoose.Schema({
  compName: {
    type: String,
    required: true,
  },
  compUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  optradio: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  stipend: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  gradDate: {
    type: String,
    required: true,
  },
  positions: {
    type: String,
    required: true,
  },
  jd: {
    type: String,
    required: true,
  },
  others: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
});

// ENTER COLLECTION NAME HERE
const jdUser = mongoose.model("JD", jdSchema);

// EXPORT IT AS MODULE, SO THAT YOU CAN USE IT EVERYWHERE
module.exports = jdUser;
