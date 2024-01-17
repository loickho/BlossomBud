const { userTable } = require('../models/users.models');
const { plantsTable } = require ('../models/plants.models');

const bcrypt = require('bcrypt');

const create = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await userTable.findOne({ email: email });
  if (user) {
    return res
      .status(409)
      .send({ error: '409', message: 'User already exists' });
  }
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new userTable({
      email,
      username,
      password: hash,
    });
    const savedUser = await newUser.save();
    req.session.uid = savedUser._id;
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send({ error, message: 'Could not create user' });
  }
};

async function login (req, res) {
  try {
    const { email, password } = req.body;
    const user = await userTable.findOne({ email: email });
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

async function profile (req, res) {
  try {
    const { _id } = req.user;
    const user = { _id };
    res.status(200).send(user);
  } catch {
    console.error(`Error in profile function`, error)
    res.status(404).send({ error, message: 'User not found' });
  }
}

async function logout (req, res) {
  req.session.destroy((error) => {
    if (error) {
      res
        .status(500)
        .send({ error, message: 'Could not log out, please try again' });
    } else {
      res.clearCookie('sid');
      res.status(200).send({ message: 'Logout successful' });
    }
  });
};

async function getUser (req, res) {
  try {
    const id = req.params.user_id;
    const user = await userTable.findOne({ _id: id });
    res.status(200);
    res.send(user);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUserPlant (req, res) {
  try {
    const user_id = req.params.user_id;
    const plant_id = req.params.plant_id;
    // find user (get images from here)
    const userInfo = await userTable.findOne({ _id : user_id });
    // get plant details from plants table
    const plantInfo = await plantsTable.findOne({ _id : plant_id});

    // TODO: return the image of the correct plant if user has two of the same plant
    const filteredPictures = userInfo.garden
    .filter((plant) => plant.plantid === plant_id)

    // combine user images with plant details
    const infoToSend = {
      _id: userInfo._id,
      diary: filteredPictures[0].pictures,
      plantDetails: {
        name: plantInfo.name,
        temperature: plantInfo.temperature,
        humidity: plantInfo.humidity,
        watering: plantInfo.watering,
        sunlight: plantInfo.sunlight,
        safe_for_pets: plantInfo.safe_for_pets,
        repotting: plantInfo.repotting,
        fertilization: plantInfo.fertilization,
        soil_type: plantInfo.soil_type,
        pruning_requirements: plantInfo.pruning_requirements,
        mature_size: plantInfo.mature_size,
        pest_and_disease_susceptibility: plantInfo.pest_and_disease_susceptibility,
        growing_season: plantInfo.growing_season,
      }
    }
    res.status(200);
    res.send(infoToSend);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function addUserPlant (req, res) {
  try {
    const { userId, plantid, pictures } = req.body;
    const userInfo = await userTable.findOne({ _id : userId });
    const plant = await plantsTable.findOne({ _id : plantid});
    const waterEvery = plant.watering;
    const newPlant = {
      plantid: plantid,
      pictures: [pictures],
      waterIn: waterEvery
    }
    userInfo.garden.unshift(newPlant);
    const savedInfo = await userInfo.save();
    res.status(201);
    res.send(savedInfo);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function updateWaterIn (req, res) {
  try {
    const { userId, plantId, waterIn } = req.body;
    const userInfo = await userTable.findOne({ _id : userId })
    if (!userInfo) {
      return res.status(404).json({ error: 'User not found'});
    }
    const plantIndex = userInfo.garden.findIndex((plant) => plant.plantid == plantId);
    userInfo.garden[plantIndex].waterIn = waterIn;
    const updatedUser = await userTable.findOneAndUpdate(
      { _id: userId },
      { $set: { garden: userInfo.garden } },
      { new: true }
    );
    res.status(201);
    res.send(updatedUser.garden[plantIndex].waterIn);
  } catch (error) {
    res.status(500);
    res.send(error)
  }
}

module.exports = {
  create,
  login,
  profile,
  logout,
  getUser,
  getUserPlant,
  addUserPlant,
  updateWaterIn
}