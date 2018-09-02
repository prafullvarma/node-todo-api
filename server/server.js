var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose');
var Todo = require('./models/Todo');
var User = require('./models/User');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save((result) => {
    res.send(result);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log('Connected to localhost on 3000 port');
});
