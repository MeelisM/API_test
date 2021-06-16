const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { getFacts, addFacts } = require('./controllers');
const verifyToken = require('../src/middleware');

router.get('/chuckFacts', verifyToken, getFacts);
router.post('/chuckFacts/add', addFacts);

router.post('/login', (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_TOKEN);
  res.json({ accessToken: accessToken });
});

module.exports = router;
