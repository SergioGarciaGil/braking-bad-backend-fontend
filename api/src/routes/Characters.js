const express = require("express");

const router = express.Router();
const getAllCharacters = require("../Controllers/getAllCharacters");
const createCharacter = require("../Controllers/createCharacter");

router.get("/", getAllCharacters);
router.post("/", createCharacter);

module.exports = router;
