const authService = require('./auth_services');

const testing = async (req, res) => {
  try {
    res.render('index', { testing: 'success' });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const register = async (req, res) => {
  try {
    const {
      email,
      name,
      number,
      password,
      category,
      purchase_history,
      pending_history,
    } = req.body;
    const user = await authService.saveUser({
      email,
      name,
      number,
      password,
      category,
      purchase_history,
      pending_history,
    });
    res.status(200).send({
      status: 'success',
      message: 'registration successful',
      user_id: user._id,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.checkUserExistence(email, password);
    res.status(200).send({
      status: 'success',
      message: 'login successful',
      user_id: user._id,
    });
  } catch (err) {
    res.status(401).send({ status: 'failed', message: 'Unauthorized' });
  }
};

module.exports = {
  testing,
  login,
  register,
};
