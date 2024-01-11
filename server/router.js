const router = require('express').Router();
const plantsController = require('./controllers/plants.controllers');

router.get('/', plantsController.getPlants);

module.exports = router;
