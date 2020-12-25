const express = require('express');
const path = require('path');
const getCards = require('./routes/cards');
const { getUsers, getUser } = require('./routes/users');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', getUsers);

app.use('/', getUser);

app.use('/', getCards);

app.use((req, res) => {
  res.status(404);
  res.json({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT);
