const express = require('express');
const loginController = require ('../controllers/authLogin.js');
const validateLogin = require ('../middleware/validateLogin.js')

const loginRouter = express.Router();


loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;