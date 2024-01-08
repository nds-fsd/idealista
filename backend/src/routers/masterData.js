const express = require('express');
const realestateTypeController = require('../controllers/realestateType');
const realestateOperationController = require('../controllers/realestateOperations');

const masterDataRouter = express.Router();

masterDataRouter.get('/realestate/types', realestateTypeController.getAll)
masterDataRouter.get('/realestate/buyoperations', realestateOperationController.getAllOperationsForBuyers)

module.exports = masterDataRouter;