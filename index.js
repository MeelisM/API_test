require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3001;
const router = require('./src/router');

app.get('/', (req, res) => {
  res.send('Up and running!');
});

app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Up and running on http://localhost:${PORT}`);
})
