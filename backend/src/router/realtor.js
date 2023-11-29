const express = require("express");
const realtorRouter = require("./realtorRouter")
const router = express.Router();


router.use("/", realtorRouter);


module.exports = router;

// probablamente obsoleto