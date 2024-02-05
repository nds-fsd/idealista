const express = require('express');
const favoriteController = require('../controllers/favorite');
const favoriteMiddleware = require('../middleware/favorite')

const favoriteRouter = express.Router();

favoriteRouter.get('/', favoriteController.getAll);
favoriteRouter.get('/:id', favoriteController.getById);
favoriteRouter.post('/', favoriteMiddleware, favoriteController.create);
favoriteRouter.patch('/:id', favoriteController.update);
favoriteRouter.delete('/:id', favoriteController.remove);

module.exports = favoriteRouter;