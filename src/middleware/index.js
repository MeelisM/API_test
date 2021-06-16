const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.send('Token is missing!');

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.send('Token is no longer valid!');
    req.user = user;
    next();
  });
};
module.exports = verifyToken;
