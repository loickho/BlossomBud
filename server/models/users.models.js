const users = require('./index');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  garden: Array
})

const userTable = mongoose.model('users', userSchema);

// function getUser (id) {
//   return userTable.findOne({_id: id})
// }

// function login (email) {
//   return userTable.findOne({ email: email })
// }

// function create (email) {
//   return userTable.findOne({ email: email })
// }

module.exports = {
  userTable
}