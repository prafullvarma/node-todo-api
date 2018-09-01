// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser : true}, (err, db) => {
  if(err){
    return console.log('Error with database');
  }
  console.log('Connected with database');

  const dbo = db.db('TodoApp');

  // dbo.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b8b008aa85aa51640f5ecbe')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }, (err, res) => {
  //   if(err) throw err;
  //   console.log(res);
  // });

  dbo.collection('Users').findOneAndUpdate({
    name: 'Steve'
  }, {
    $inc: {
      age : 1
    }
  },
  {
    returnOriginal: false
  },(err, res) => {
    if(err) throw err;
    console.log(res);
  }
  );

  db.close();
});
