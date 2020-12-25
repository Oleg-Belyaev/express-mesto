const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    const err = `file ${path} not found`;
    throw err;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      const err = 'JSON is invalid';
      throw err;
    }
  });

module.exports = readJson;
