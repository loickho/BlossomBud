const plantsModel = require('../models/plants.models');

async function getPlants (req, res) {
  try {
    const plants = await plantsModel.getPlants();
    res.status(200);
    res.send(plants);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getOne (req, res) {
  try {
    const id = req.params.id;
    const plant = await plantsModel.getOne(id);
    res.status(200);
    res.send(plant);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {getPlants, getOne}