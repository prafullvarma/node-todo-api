const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 11
}

var token = jwt.sign(data, '111aaa');

var decoded = jwt.verify(token, '111aaa');


// var msg = "blah vlah dlah";
//
// var hsh = SHA256(msg).toString();
//
// console.log(`Message: ${msg}`);
// console.log(`Hashed Value: ${hsh}`);
//
// var data = {
//   id:2
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash===token.hash){
//   console.log('Data was not changed');
// }else{
//   console.log('Data was change. Don\'t trust.');
// }
