const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '6b9ea1a2c34ecc3224a804a2';

// if(!ObjectID.isValid(id)){
//   return console.log('Id is not valid');
// }

// Todo.find({
//   _id : id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id : id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo)=>{
//   if(!todo) return console.log(`Todo by ${id} not found`);
//   console.log('Todo by id', todo);
// });

var userId = '6b8b2b49130afb2cfc4eb3e6';

User.findById(userId).then((user) => {
  if(!user) return console.log('User id not found');
  console.log('User', user);
},(err) => {
  console.log(err);
});
