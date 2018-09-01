// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
  if(err){
    return console.log('Error with database');
  }
  console.log('Connected with database');

  const dbo = db.db('TodoApp');

  // delete Many
  // dbo.collection('Todos').deleteMany({text : 'Be cool'}, (err, res)=> {
  //   if(err) throw err;
  //   console.log(res);
  // });

  // delete One
  // dbo.collection('Todos').deleteOne({text: 'Walk'}, (err, res) => {
  //   if(err) throw err;
  //   console.log('Deleted One row');
  //   console.log(res);
  // });

  // find one and delete
  dbo.collection('Users').findOneAndDelete({name: 'Chris'}, (err, res)=>{
    if(err) throw err;
    console.log(res);
  });

  db.close();
});
