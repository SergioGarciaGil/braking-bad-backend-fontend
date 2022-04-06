const express = require("express");
const characterRoutes = require("./Characters");

const router = express.Router();

router.use("/characters", characterRoutes);

module.exports = router;
