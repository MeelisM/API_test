const db = require('../db');
const Facts = db.Facts;

module.exports = async function (req, res) {
  try {
    const getFact = await Facts.aggregate([{ $sample: { size: 1 } }]);
    res.status(200).json(getFact);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
