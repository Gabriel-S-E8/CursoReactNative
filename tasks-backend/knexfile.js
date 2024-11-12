require('dotenv').config()

module.exports = {
    client: 'postgresql',
    connection: {
        database: 'Curso',
        user: 'postgres',
        password: process.env.DB_PASS,
        host: 'localhost',
        port: 5433
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
    },
};
