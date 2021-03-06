require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const router = require('./src/router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Up and running!');
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Up and running on http://localhost:${PORT}`);
});
