require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const routes = require('./router/routes.js')


const port = 4444;

const app = express();

//initialize the db
require('./database/config');

//init the table + seed data
require('./database');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/static')));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`node listening on port ${port}`);
});

