const express = require("express");
const controller = require("../controller/realtor.js");
const realtorRouter = express.Router();

realtorRouter.get("/realtor",controller.getRealtor)
realtorRouter.get("/realtor/:id",controller.getRealtor)
realtorRouter.post("/realtor",controller.postRealtor)

// FILIP FALTARIA AÑADIR AQUI LO QUE HAS CREADO :)


module.exports = realtorRouter;
