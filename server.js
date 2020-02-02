require('dotenv').config();

const express = require('express');
const app = express();
const Game = require('./models/game');

app.use(express.json());

app.post('/games/:gameId/picks', (req, res) => {
  if (!req.body || invalidPicksObject(req.body)) res.sendStatus(400);

  const { gameId } = req.params;
  const { username } = req.body;

  Game
    .createUser(username, gameId)
    .then(userId => Game.insertPicks(userId, gameId, req.body.picks))
    .then(() => res.sendStatus(201))
    .catch(console.log);
});

function invalidPicksObject(obj) {
  if (!Object.keys(obj).includes('username')) return true;
  if (!Object.keys(obj).includes('picks')) return true;
  if (!Array.isArray(obj.picks)) return true;
  if (obj.picks.length != 11) return true;
  obj.picks.forEach(p => {
    if (!Object.keys(p).includes('categoryId')) return true;
    if (!Object.keys(p).includes('nomineeId')) return true;
  });
  return false;
}

/*
  GET game picks
  POST game picks
  GET game scores
  GET all categories (names and IDs)
  GET all nominees (names and IDs)

  admin
  GET login
  POST login
  POST game (create new game)
  GET game update
  POST game update
*/

app.listen(3000);
