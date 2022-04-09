require('../db/mongoose');
const Users = require('../models/User');

const saveUser = async (userDetails) => new Users(userDetails).save();

const checkUserExistence = async (email, password) =>
  Users.findOne({ email, password });

module.exports = {
  checkUserExistence,
  saveUser,
};
