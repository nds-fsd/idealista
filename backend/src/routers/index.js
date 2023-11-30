const express = require('express')
const realestateRouter = require('./realestate');

const router = express.Router();

router.use('/realestates', realestateRouter);

module.exports = router;