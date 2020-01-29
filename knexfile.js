// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_URL,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_URL,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
