const Model = require('knex');

const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
}
Model.knex(dbConfig).client();
console.log(Model.knex(dbConfig).client());

module.exports = {
    Model
}