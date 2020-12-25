const path = require('path');
const readJson = require('../utils/readJsonFile');

const getCards = (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'cards.json');
  readJson(fileName)
    .then((cards) => res.send(cards))
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

module.exports = getCards;
