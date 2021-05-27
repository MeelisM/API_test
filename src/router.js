const express = require('express');
const router = express.Router();

const { getFacts, addFacts } = require('./controllers');

router.get('/chuckFacts', getFacts );
router.post('/chuckFacts/add', addFacts );

module.exports = router;
