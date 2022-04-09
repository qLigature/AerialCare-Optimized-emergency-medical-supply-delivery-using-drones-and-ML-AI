const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

mongoose.connection
  .once('open', () => {
    // console.log('DB connected');
  })
  .on('error', (error) => {
    // console.log('err', error);
  });
