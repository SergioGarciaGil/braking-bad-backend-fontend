const express = require("express");
const characterRoutes = require("./Characters");
const occupationsRoutes = require("./Occupations");

const router = express.Router();

router.use("/characters", characterRoutes);
router.use("/occupations", occupationsRoutes);

module.exports = router;
