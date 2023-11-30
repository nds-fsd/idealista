const express = require("express");
const realtorController = require("../controller/realtor.js");
const realtorRouter = express.Router();

realtorRouter.get("/", realtorController.getRealtors);
realtorRouter.get("/:id", realtorController.getRealtorId);
realtorRouter.post("/", realtorController.postRealtor);
realtorRouter.patch("/:id", realtorController.patchRealtor);
realtorRouter.delete("/:id", realtorController.deleteRealtor);

module.exports = realtorRouter;
