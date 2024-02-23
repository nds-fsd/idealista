const express = require('express');
const realestateController = require('../controllers/realestate');

const realestateRouter = express.Router();

realestateRouter.get('/', realestateController.getAll)
realestateRouter.get('/:id', realestateController.getId);
realestateRouter.get('/user/:id', realestateController.getByUserId);
realestateRouter.post('/', realestateController.create);
realestateRouter.patch('/:id', realestateController.update);
realestateRouter.delete('/:id', realestateController.remove);

module.exports = realestateRouter;