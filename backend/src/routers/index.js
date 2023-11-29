const express = require('express')
const realestateRouter = require('../controllers/realestate');

const router = express.Router();

router.use('/realstates', realestateRouter);

module.exports = router;