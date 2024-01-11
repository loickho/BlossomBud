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

module.exports = {getPlants}