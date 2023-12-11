const express = require('express')
const realtorRouter = require('../routers/realtor');
const userRouter = require('../routers/users');


const router = express.Router();

router.use('/realtors', realtorRouter);
router.use('/users', userRouter);



module.exports = router;