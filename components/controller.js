const authService = require('./auth_services');
const buyer_services = require('./buyer_services');

// const testing = async (req, res) => {
//   try {
//     res.render('index', { testing: 'success' });
//   } catch (err) {
//     res.status(400).send({ status: 'failed', message: err.message });
//   }
// };

const loginPage = async (req, res) => {
  try {
    res.render('login', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const landingPage = async (req, res) => {
  try {
    res.render('landing', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const registrationPage = async (req, res) => {
  try {
    res.render('registration', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const checkoutPage = async (req, res) => {
  try {
    res.render('user-checkout', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const dashboardPage = async (req, res) => {
  try {
    res.render('user-dashboard', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const newOrderPage = async (req, res) => {
  try {
    res.render('user-new-order', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const ordersPage = async (req, res) => {
  try {
    res.render('user-orders', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const adminOrdersPage = async (req, res) => {
  try {
    res.render('admin-orders', {});
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

const register = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await authService.saveUser({
      email,
      name,
      number: '123456789',
      password,
      category: 'single user',
      orders: [],
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

const buy = async (req, res) => {
  try {
    const { user_id, product, location, notes } = req.body;
    const order = await buyer_services.createOrder(
      user_id,
      product,
      location,
      notes
    );
    res.status(200).send({
      status: 'success',
      order_details: order,
    });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};

module.exports = {
  landingPage,
  loginPage,
  login,
  register,
  buy,
  registrationPage,
  checkoutPage,
  dashboardPage,
  newOrderPage,
  ordersPage,
  adminOrdersPage,
};
