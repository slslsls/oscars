require('dotenv').config();

const express = require('express');
const app = express();
const Game = require('./models/game');
const { invalidPicksObject } = require('./utils/validators');

app.use(express.json());

app.post('/games/:gameId/picks', (req, res) => {
  if (!req.body || invalidPicksObject(req.body)) res.sendStatus(400);

  const { gameId } = req.params;
  const { username } = req.body;

  return Game
    .createUser(username, gameId)
    .then(userId => Game.insertPicks(userId, gameId, req.body.picks))
    .then(() => res.sendStatus(201))
    .catch(console.log);
});

app.get('/games/:gameId/scores', (req, res) => {
  const { gameId } = req.params;

  return Game
    .getScoresForGame(gameId)
    .then(result => res.send(result))
    .catch(console.log);
});

app.get('/nominations', (req, res) => {
  return Game
    .getNominations()
    .then(nominations => res.send(nominations))
    .catch(console.log);
});

/*
  GET game scores
  GET all categories (names and IDs) and nominees (names and IDs)

  admin
  GET login
  POST login
  POST game (create new game)
  GET game update
  POST game update
*/

app.listen(3000);
