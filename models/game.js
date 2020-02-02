const db = require('../data/db');

function createUser(name, game) {
  return db('users')
    .returning('id')
    .insert({ name, game });
}

function insertPicks(userId, gameId, picks) {
  const promises = [];

  picks.forEach(p => {
    console.log(p)
    promises.push(
      db('picks').insert({
        user: userId[0],
        game: gameId,
        category: p.categoryId,
        nominee: p.nomineeId
      })
    );
  });

  return Promise.all(promises);
}

module.exports = {
  createUser,
  insertPicks
};
