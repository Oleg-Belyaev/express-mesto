const getUsers = require('express').Router();
const getUser = require('express').Router();
const path = require('path');
const readJson = require('../utils/readJsonFile');

getUsers.get('/users', (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'users.json');
  readJson(fileName)
    .then((users) => {
      res.send(users);
    });
});

getUser.get('/users/:id', (req, res) => {
  const fileName = path.join(__dirname, '..', 'data', 'users.json');
  const { id } = req.params;
  readJson(fileName)
    .then((users) => {
      const user = users.find((item) => item._id === id);
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    });
});

module.exports = {
  getUsers,
  getUser,
};
