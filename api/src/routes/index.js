const express = require("express");
const characterRoutes = require("./Characters");
const occupationsRoutes = require("./Occupations");
// const { Character, Occupation } = require("../db");
const router = express.Router();

router.use("/characters", characterRoutes);
router.use("/occupations", occupationsRoutes);

router.use("/character", characterRoutes);
module.exports = router;
