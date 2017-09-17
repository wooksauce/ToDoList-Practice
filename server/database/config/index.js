var Sequelize = require('sequelize');


var db = new Sequelize (process.env.DB_URL);

db.authenticate()
  .then (() => {
    console.log('successfully connected to the database');
  })
  .catch((err) => {
    console.log('unable to connect to the database', err)
  })

module.exports = db;

