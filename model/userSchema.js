const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// ENTER COLLECTION NAME HERE
const User = mongoose.model("USER", userSchema);

// EXPORT IT AS MODULE, SO THAT YOU CAN USE IT EVERYWHERE
module.exports = User;
