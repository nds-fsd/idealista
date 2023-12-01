const express = require('express');
const realtorRouter = require('./realtor');

const router = express.Router();

router.use('/realtors', realtorRouter);

module.exports = router;

