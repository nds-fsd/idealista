const express = require('express');
const userController = require('../controllers/users');
const validateRegister = require('../middleware/users.js');

const userRouter = express.Router();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getById);
userRouter.get('/:id/favorite', userController.getFavorite);
userRouter.get('/:id/realestates',userController.getRealEstates)
userRouter.delete('/:userId/favorite/:realEstateId', userController.deleteFavorite);
userRouter.post('/', validateRegister, userController.create);
userRouter.put('/:id', userController.update);
userRouter.delete('/:id', userController.remove);

module.exports = userRouter;