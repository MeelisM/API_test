const db = require('../db');
const Facts = db.Facts;

module.exports = async function (req, res) {
  try {
    await Facts.create(req.body);
    res.status(200).json({ message: 'Success!' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};