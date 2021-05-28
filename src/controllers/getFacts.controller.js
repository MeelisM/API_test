const db = require('../db');
const Facts = db.Facts;

module.exports = async function (req, res) {
  try {
    const getFact = await Facts.aggregate([{ $sample: { size: 1 } }]);
    const chuckFact = getFact[0].fact
    res.status(200).json(chuckFact);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
