const router = require('express').Router();
const plantsController = require('./controllers/plants.controllers');

router.get('/', (req, res) => res.send('hello world!'))
router.get('/getAll', plantsController.getPlants);
router.get('/:id', plantsController.getOne);

module.exports = router;
