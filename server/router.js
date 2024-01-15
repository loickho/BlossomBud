const router = require('express').Router();
const plantsController = require('./controllers/plants.controllers');
const usersController = require('./controllers/users.controllers');
const authMiddleware = require('./middlewares/auth');

router.post('/register', usersController.create);
router.post('/login', usersController.login);

router.get('/', (req, res) => res.send('hello world!'))
router.get('/getAll', plantsController.getAllPlants);
router.get('/:plant_id', plantsController.getPlant);

router.get('/myGarden/:user_id', usersController.getUser);
router.get('/myGarden/:user_id/:plant_id', usersController.getUserPlant);
router.put('/:user_id/addUserPlant', usersController.addUserPlant);
router.get('/me', authMiddleware, usersController.profile);

module.exports = router;
