const Sequelize = require('sequelize');
const db = require('./config');


const Todo = db.define('Todo', {
  item: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
})

db.sync();

module.exports = Todo;