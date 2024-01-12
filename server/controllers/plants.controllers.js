const { plantsTable } = require('../models/plants.models');

async function getAllPlants (req, res) {
  try {
    const plants = await plantsTable.find();
    res.status(200);
    res.send(plants);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getPlant (req, res) {
  try {
    const id = req.params.id;
    const plant = await plantsTable.findOne({ _id: id });
    res.status(200);
    res.send(plant);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {
  getAllPlants,
  getPlant
}