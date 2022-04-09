const express = require("express");

const router = express.Router();
const getAllCharacters = require("../Controllers/getAllCharacters");
const createCharacter = require("../Controllers/createCharacter");
const getById = require("../Controllers/getById");

router.get("/", getAllCharacters);
router.post("/", createCharacter);
// router.get("/:id", getById);

module.exports = router;
