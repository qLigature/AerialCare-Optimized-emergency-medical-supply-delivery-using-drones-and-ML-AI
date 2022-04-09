const testing = async (req, res) => {
  try {
    res.render('index', { testing: 'success' });
  } catch (err) {
    res.status(400).send({ status: 'failed', message: err.message });
  }
};
module.exports = {
  testing,
};
