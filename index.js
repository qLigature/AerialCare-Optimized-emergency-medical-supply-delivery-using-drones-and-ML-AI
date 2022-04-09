const express = require('express');
const path = require('path');
const cors = require('cors');
const componentRouter = require('./components/router');

const app = express();
const publicDirectoryPath = path.join(__dirname, '/public');

//* setting the view engine as hbs
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.use(express.json());
app.use(cors());

app.use(componentRouter);

app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
