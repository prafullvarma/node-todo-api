// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
  if(err){
    return console.log('Error with database');
  }
  console.log('Connected with database');

  const dbo = db.db('TodoApp');

  // dbo.collection('Todos').find({_id: new ObjectID('5b8a9c579b7fba1a5c344a1b')}).toArray((err,res) => {
  //   if(err) throw err;
  //   console.log(JSON.stringify(res, undefined, 2));
  // });

  // dbo.collection('Todos').find().count((err,count) => {
  //   if(err) throw err;
  //   console.log(`Todos count : ${count}`);
  // });

  dbo.collection('Users').find({name: 'Chris'}).toArray((err,res) => {
    if(err) throw err;
    console.log(JSON.stringify(res, undefined, 2));
  });

  db.close();
});
