const express = require("express");

const router = express.Router();
const getAllCharacters = require("../Controllers/getAllCharacter");

router.get("/", getAllCharacters);
module.exports = router;
