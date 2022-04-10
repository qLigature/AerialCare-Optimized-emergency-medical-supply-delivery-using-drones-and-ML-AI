const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const componentRouter = require('./components/router');

const PORT = process.env.PORT || 3000;
const app = express();
const publicDirectoryPath = path.join(__dirname, '/public');

//* setting the view engine as hbs
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use(componentRouter);

app.listen(PORT, () => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
