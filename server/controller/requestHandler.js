const Todo = require('../database/index.js');

module.exports = {
  getItems: (req, res) => {
    Todo.findAll()
    .then((items) => {
      console.log('im in get items')
      res.status(200).send(items);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
  },
  
  postItem: (req, res) => {
    Todo.create(req.body) 
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((err) => {
      res.status(404).send('item couldn\'t be added', err);
    })
  },

  deleteItem: (req,res) => {
    console.log('delete control', req.params)
    Todo.destroy({where: {id: req.params.id}})
    .then(destroyed => {
      res.status(202).send(destroyed);
    })
    .catch(err => {
      console.log('delete error')
      res.status(404).send(err);
    })
  }
}