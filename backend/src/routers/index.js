const express = require('express')

const masterDataRouter = require('./masterData')
const realestateRouter = require('../routers/realestate');
const realtorRouter = require('../routers/realtor');
const userRouter = require('../routers/users');
const authLoginRouter = require('../routers/authLogin');
const favoriteRouter = require('./favorite');

const router = express.Router();
router.use('/masterdata', masterDataRouter);
router.use('/realestates', realestateRouter);
router.use('/realtors', realtorRouter);
router.use('/users', userRouter);
router.use('/login', authLoginRouter);
router.use('/favorite', favoriteRouter);
// router.get("/ws", (req, res) => {
//   res.send(`
//     <script src = "/socket.io/socket.io.js"></script>
//     <script>
//       const socket = io();
//    </script>
//     `);
// })
module.exports = router;