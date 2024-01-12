const router = require('express').Router();
const plantsController = require('./controllers/plants.controllers');
const usersController = require('./controllers/users.controllers');

router.post('/register', usersController.create);
router.post('/login', usersController.login);

router.get('/', (req, res) => res.send('hello world!'))
router.get('/getAll', plantsController.getPlants);
router.get('/:id', plantsController.getOne);

router.get('/myGarden/:id', usersController.getUser);

module.exports = router;
