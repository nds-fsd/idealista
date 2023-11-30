const express = require('express');
const realstateController = require('../controllers/realestate');

const realstateRouter = express.Router();

realstateRouter.get('/', realstateController.getAll)
realstateRouter.get('/:id', realstateController.getId);
realstateRouter.post('/', realstateController.create);
realstateRouter.patch('/:id', realstateController.update);
realstateRouter.delete('/:id', realstateController.remove);

module.exports = realstateRouter;