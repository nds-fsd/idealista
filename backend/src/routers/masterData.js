const express = require('express');
const realestateTypeController = require('../controllers/realestateType');
const realestateOperationController = require('../controllers/realestateOperations');
const realestateStatesController = require('../controllers/realestateStates');

const masterDataRouter = express.Router();

masterDataRouter.get('/realestate/types', realestateTypeController.getAll)
masterDataRouter.get('/realestate/buyoperations', realestateOperationController.getAllOperationsForBuyers)
masterDataRouter.get('/realestate/states', realestateStatesController.getAll)

module.exports = masterDataRouter;