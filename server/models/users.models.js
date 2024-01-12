const users = require('./index');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  garden: Array
})

const userTable = mongoose.model('users', userSchema);

function getUser (id) {
  return userTable.findOne({_id: id})
}

module.exports = {
  getUser
}