const getCards = require('express').Router();
const path = require('path');
const readJson = require('../utils/readJsonFile');

getCards.get('/cards', (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'cards.json');
  readJson(fileName)
    .then((cards) => res.send(cards))
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = getCards;
