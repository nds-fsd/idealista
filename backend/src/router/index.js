const express = require('express');
const realtorRouter = require('./realtorRouter');

const router = express.Router();

router.use('/realtor', realtorRouter);

module.exports = router;

// añadido un index.js desde donde irán todos los demás enrutadores de entidades (probablemente haciendo obsoleto el archivo realtor.js)