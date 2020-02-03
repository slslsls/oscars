const db = require('../data/db');

function createUser(name, game) {
  return db('users')
    .returning('id')
    .insert({ name, game });
}

function insertPicks(userId, gameId, picks) {
  const promises = [];

  picks.forEach(p => {
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

function getScoresForGame(gameId) {
  return db('users')
    .where('game', gameId)
    .select('name', 'score');
}

function getNominations() {
  const categories = [];
  let nominees = [];

  return getNominees()
    .then(result => {
      nominees = result;
      return getCategories();
    }).then(categories => {
      return buildNominations(categories, nominees);
    });
}

function buildNominations(categories, nominees) {
  const nominations = [];

  categories.forEach(category => {
    const nomination = {
      categoryId: category.id,
      categoryName: category.name,
      nominees: []
    };
    nominees.forEach(nominee => {
      if (nominee.category == category.id) {
        const n = {
          nomineeId: nominee.id,
          nomineeName: nominee.name,
          nomineeFilm: nominee.film
        };
        nomination.nominees.push(n);
      }
    });
    nominations.push(nomination);
  });

  return nominations;
}
/*
[
  {
    categoryId: 2,
    categoryName: 'Best Actor',
    nominees: [
      {
        nomineeId: 4,
        nomineeName: 'Adam Driver',
        nomineeFilm: 'Marriage Story'
      }
    ]
  }
]
*/

function getNominees() {
  return db('nominees')
    .select('*');
}

function getCategories() {
  return db('categories')
    .select('*');
}

module.exports = {
  createUser,
  insertPicks,
  getScoresForGame,
  getNominations
};
