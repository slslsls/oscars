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

app.post('/game', (req, res) => {
  if (!req.body || !req.body.name) return res.sendStatus(400);
  // not a huge deal, just a quick and easy measure to prevent anyone else from making admin calls
  if (!req.body.adminPassword || req.body.adminPassword != process.env.ADMIN_PASSWORD) return res.sendStatus(401);

  return Game
    .createNewGame(req.body.name)
    .then(() => res.sendStatus(201))
    .catch(console.log);
});

app.post('/games/:gameId/update', (req, res) => {
  if (!req.body || !req.body.categoryId || !req.body.winnerId ) return res.sendStatus(400);
  // not a huge deal, just a quick and easy measure to prevent anyone else from making admin calls
  if (!req.body.adminPassword || req.body.adminPassword != process.env.ADMIN_PASSWORD) return res.sendStatus(401);

  return Game
    .updateGame(req.params.gameId, req.body)
    .then(() => res.send(204))
    .catch(console.log);
});

/*

  admin
  POST game (create new game)
  POST game update
*/

app.listen(3000);
