// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
  if(err){
    return console.log('Error with database');
  }
  console.log('Connected with database');

  const dbo = db.db('TodoApp');

  // dbo.collection('Todos').insertOne({
  //   text: 'Walk',
  //   completed: false
  // }, (err, res) => {
  //   if(err) return console.log('Unable to insert data');
  //   console.log('Record inserted', JSON.stringify(res.ops, undefined, 2));
  // });

  dbo.collection('Users').insertOne({
    name: 'Steve',
    age: 100,
    location : 'Brooklyn'
  }, (err, res) => {
    if(err) throw err;
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  db.close();
});
