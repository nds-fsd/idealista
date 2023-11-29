const express = require('express');
/* AQUI VIENE import de router de realty */
const realtorRouter = require('./realtorRouter');

const router = express.Router();

/* AQUI VIENE router.use de realty */
router.use('/realtor', realtorRouter);

module.exports = router;

// añadido un index.js desde donde irán todos los demás enrutadores de entidades (probablemente haciendo obsoleto el archivo realtor.js)
