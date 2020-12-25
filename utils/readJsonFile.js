const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .then((data) => JSON.parse(data));

module.exports = readJson;
