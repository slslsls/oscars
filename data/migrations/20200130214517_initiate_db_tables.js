exports.up = knex => {

  return createGames()
    .then(createCategories)
    .then(createNominees)
    .then(createUsers)
    .then(createPicks);

  function createGames() {
    return knex.schema.createTable('games', table => {
      table.increments('id');
      table.string('name');
    });
  }

  function createCategories() {
    return knex.schema.createTable('categories', table => {
      table.increments('id');
      table.string('name');
      table.integer('points');
    });
  }

  function createNominees() {
    return knex.schema.createTable('nominees', table => {
      table.increments('id');
      table.string('name');
      table.string('film');
      table.integer('category').unsigned();
      table.foreign('category').references('categories.id');
    });
  }

  function createUsers() {
    return knex.schema.createTable('users', table => {
      table.increments('id');
      table.string('name');
      table.integer('game').unsigned();
      table.foreign('game').references('games.id');
      table.integer('score');
    });
  }

  function createPicks() {
    return knex.schema.createTable('picks', table => {
      table.increments('id');
      table.integer('user').unsigned();
      table.foreign('user').references('users.id');
      table.integer('game').unsigned();
      table.foreign('game').references('games.id');
      table.integer('category').unsigned();
      table.foreign('category').references('categories.id');
      table.integer('nominee').unsigned();
      table.foreign('nominee').references('nominees.id');
      table.boolean('announced');
      table.boolean('won');
    });
  }

}

exports.down = knex => {
  return dropPicks()
    .then(dropUsers)
    .then(dropNominees)
    .then(dropCategories)
    .then(dropGames);

  function dropNominees() {
    return knex.schema.dropTableIfExists('nominees');
  }

  function dropCategories() {
    return knex.schema.dropTableIfExists('categories');
  }

  function dropUsers() {
    return knex.schema.dropTableIfExists('users');
  }

  function dropPicks() {
    return knex.schema.dropTableIfExists('picks');
  }

  function dropGames() {
    return knex.schema.dropTableIfExists('games');
  }

}
