const express = require('express');
const realestateTypeController = require('../controllers/realestateType');

const masterDataRouter = express.Router();

masterDataRouter.get('/realestate/types', realestateTypeController.getAll)

module.exports = masterDataRouter;