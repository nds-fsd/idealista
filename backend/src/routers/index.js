const express = require('express')
const realestateRouter = require('./realestate');
const userRouter = require('../routers/users');

const router = express.Router();
router.use('/realestates', realestateRouter);
router.use('/users', userRouter);

module.exports = router;