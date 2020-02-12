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

function getNominees() {
  return db('nominees')
    .select('*');
}

function getCategories() {
  return db('categories')
    .select('*');
}

function createNewGame(name) {
  return db('games')
    .insert({
      name
    });
}

function updateGame(gameId, update) {
  const { categoryId, winnerId } = update;

  return db('picks')
    .where('game', gameId)
    .andWhere('category', categoryId)
    .andWhere('nominee', winnerId)
    .update({
      won: true
    })
    .then(() => {
      return db('picks')
        .where('game', gameId)
        .andWhere('category', categoryId)
        .update({
          announced: true
        });
    })
    .then(() => {
      return db('users')
    });
}

module.exports = {
  createUser,
  insertPicks,
  getScoresForGame,
  getNominations,
  createNewGame,
  updateGame
};
