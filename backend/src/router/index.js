const express = require('express');
const realtorRouter = require('./realtor');

const router = express.Router();

router.use('/realtor', realtorRouter);

module.exports = router;

