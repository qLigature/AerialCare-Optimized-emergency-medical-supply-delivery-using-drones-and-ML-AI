const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
  },
  token: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
  gender: {
    type: String,
  },
  pic: {
    type: String,
  },
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;
