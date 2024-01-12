const plants = require('./index');
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  temperature: String,
  humidity: String,
  watering: Number,
  sunlight: String,
  safe_for_pets: Boolean,
  repotting: Number,
  fertilization: String,
  soil_type: String,
  pruning_requirements: String,
  mature_size: String,
  pest_and_disease_susceptibility: String,
  growing_season: String
})

const plantsTable = mongoose.model('plants', plantSchema);

// function getPlants () {
//   return plantsTable.find()
// }

// function getOne (id) {
//   return plantsTable.findOne({_id: id})
// }

module.exports = {
  plantsTable
}