const express = require('express');
const router = express.Router();

const { getFacts, addFacts, userLogin } = require('./controllers');
const verifyToken = require('./middleware/verifyToken');


router.get('/chuckFacts', verifyToken, getFacts);
router.post('/chuckFacts/add', addFacts);

router.post('/login', userLogin);

module.exports = router;
