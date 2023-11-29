const express = require("express");
const controller = require("../controller/realtor.js");
const realtorRouter = express.Router();

realtorRouter.get("/realtor", controller.getRealtor);
realtorRouter.get("/realtor/:id", controller.getRealtor);
realtorRouter.post("/realtor", controller.postRealtor);
realtorRouter.patch("/realtor/:id", controller.patchRealtor);
realtorRouter.delete("/realtor/:id", controller.deleteRealtor);

module.exports = realtorRouter;
