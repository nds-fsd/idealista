const express = require('express');
const loginController = require ('../controllers/authLogin.js');
const validateAuthLogin = require ('../middleware/authLogin.js')

const loginRouter = express.Router();


loginRouter.post('/', validateAuthLogin, loginController.login);

module.exports = loginRouter;