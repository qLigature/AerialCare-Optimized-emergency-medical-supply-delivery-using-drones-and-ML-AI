const DAL = require('./DAL');

const saveUser = async (userDetails) => {
  const userSaved = await DAL.saveUser(userDetails);
  if (!userSaved) throw new Error('registration unsuccessful');
  return userSaved;
};

const checkUserExistence = async (email, password) => {
  const userExists = await DAL.checkUserExistence(email, password);
  if (!userExists) throw new Error('login unsuccessful');
  return userExists;
};

module.exports = {
  checkUserExistence,
  saveUser,
};
