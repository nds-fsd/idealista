const express = require('express');
const realestateRouter = express.Router();
const realestateController = require('../controllers/realestate');
const auth = require('../middleware/authLogin');

realestateRouter.get('/', realestateController.getAll)
realestateRouter.get('/:id', realestateController.getId);
realestateRouter.post('/', auth, realestateController.create);
realestateRouter.patch('/:id', realestateController.update);
realestateRouter.delete('/:id', realestateController.remove);

module.exports = realestateRouter;