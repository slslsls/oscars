exports.up = knex => {

  return createGamesTable()
    .then(createCategoriesTable)
    .then(createUsersTable)
    .then(createPicksTable)
    .then(createGamesTable);

  function createNomineesTable() {
    return knex.schema.createTable('nominees', table => {
      table.increments('id');
      table.string('name');
      table.foreign('category').references('id').inTable('categories');
    });
  };

  function createCategoriesTable() {
    return knex.schema.createTable('categories', table => {
      table.increments('id');
      table.string('name');
      table.foreign('game').references('id').inTable('games');
      table.integer('value');
      table.foreign('winner').references('id').inTable('nominees');
    });
  };

  function createUsersTable() {
    return knex.schema.createTable('users', table => {
      table.increments('id');
      table.string('name');
      table.foreign('game').references('id').inTable('games');
      table.integer('score');
    });
  };

  function createPicksTable() {
    return knex.schema.createTable('picks', table => {
      table.increments('id');
      table.foreign('user').references('id').inTable('users');
      table.foreign('game').references('id').inTable('games');
      table.foreign('category').references('id').inTable('categories');
      table.foreign('nominee').references('id').inTable('nominees');
    });
  };

  function createGamesTable() {
    return knex.schema.createTable('games', table => {
      table.increments('id');
      table.string('name');
    });
  };

}

exports.down = knex => {
  return knex.schema.dropTableIfExists('nominees');
  knex.schema.dropTableIfExists('categories');
  knex.schema.dropTableIfExists('users');
  knex.schema.dropTableIfExists('picks');
  knex.schema.dropTableIfExists('games');
}
