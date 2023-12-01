const express = require("express");
const realtorController = require("../controller/realtor.js");
const realtorRouter = express.Router();

realtorRouter.get("/", realtorController.getAll);
realtorRouter.get("/:id", realtorController.getId);
realtorRouter.post("/", realtorController.create);
realtorRouter.patch("/:id", realtorController.update);
realtorRouter.delete("/:id", realtorController.remove);

module.exports = realtorRouter;
