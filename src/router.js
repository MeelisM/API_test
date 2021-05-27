const express = require('express');
const router = express.Router();

const { getChuckFacts } = require('./controllers');

router.get('/chuckFacts', getChuckFacts);

module.exports = router;
