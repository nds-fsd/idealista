const express = require('express');
const todoRouter = require('./realtorRouter');
const userRouter = require('./');

const router = express.Router();

router.use('/todo', todoRouter);
router.use('/user', userRouter);

module.exports = router;