const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // uid: {
  //   type: String,
  // },
  // token: {
  //   type: String,
  // },
  // pic: {
  //   type: String,
  // },
  // gender: {
  //   type: String,
  // },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  password: {
    type: String,
  },
  category: {
    type: String,
  },
  purchase_history: [
    {
      type: String,
    },
  ],
  pending_orders: [
    {
      type: String,
    },
  ],
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
