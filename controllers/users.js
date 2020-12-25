const path = require('path');
const readJson = require('../utils/readJsonFile');

const getUsers = (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'users.json');
  readJson(fileName)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

const getUser = (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'users.json');
  const { id } = req.params;
  readJson(fileName)
    .then((users) => {
      const user = users.find((item) => item._id === id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
};

module.exports = {
  getUsers,
  getUser,
};
