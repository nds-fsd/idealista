const express = require("express");
const realtorController = require("../controller/realtor.js");
const realtorRouter = express.Router();

realtorRouter.get("/", realtorController.getRealtor);
realtorRouter.get("/:id", realtorController.getRealtor);
realtorRouter.post("/", realtorController.postRealtor);
realtorRouter.patch("/:id", realtorController.patchRealtor);
realtorRouter.delete("/:id", realtorController.deleteRealtor);

module.exports = realtorRouter;
