const usersModel = require('../models/users.models');
const bcrypt = require('bcrypt');

async function create (req, res) {
  const { email, password } = req.body;
  const user = await usersModel.login(email);
  if (user)
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new usersModel({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    req.session.uid = user._id;
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

async function login (req, res) {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findOne(email);
    const validatedPass = await bcrypt.compare(password, user.password);
    if (!validatedPass) throw new Error();
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (error) {
    res
      .status(401)
      .send({ error: '401', message: 'Username or password is incorrect' });
  }
};

async function getUser(req, res) {
  try {
    const id = req.params.id;
    const user = await usersModel.getUser(id);
    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  create,
  login,
  getUser
}