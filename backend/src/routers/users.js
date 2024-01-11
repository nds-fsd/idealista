const express = require('express');
const userController = require('../controllers/users');
const validateRegister = require('../middleware/users.js');

const userRouter = express.Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', validateRegister, userController.create);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

module.exports = userRouter;