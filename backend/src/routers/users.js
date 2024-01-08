const express = require('express');
const userController = require('../controllers/users');
const userMiddleware = require('../middleware/users');

const userRouter = express.Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.post('/', userMiddleware.validateRegister, userController.create);
userRouter.patch('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

module.exports = userRouter;