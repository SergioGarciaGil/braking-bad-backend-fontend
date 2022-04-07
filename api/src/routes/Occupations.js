const express = require("express");
const router = express.Router();
const getOccupations = require("../Controllers/getOccupations");

router.get("/", getOccupations);

module.exports = router;
