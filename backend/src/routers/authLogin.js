const express = require('express');
const loginController = require ('../controllers/authLogin.js');

const loginRouter = express.Router();

loginRouter.post('/',loginController.login);

module.exports = loginRouter;