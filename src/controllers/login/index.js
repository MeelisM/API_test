const jwt = require('jsonwebtoken');

const userLogin = async (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  const accessToken = jwt.sign(user, process.env.JWT_TOKEN);
  res.send({ accessToken: accessToken });
};
module.exports = userLogin;
