const express = require("express");
const characterRoutes = require("./Characters");
const occupationsRoutes = require("./Occupations");
// const { Character, Occupation } = require("../db");
const router = express.Router();

const { getCharacters } = require("../Controllers/getAllCharacters");

router.use("/characters", characterRoutes);
router.use("/occupations", occupationsRoutes);

router.use("/characters/:id", async (req, res) => {
  const id = req.params.id;
  const charactersTotal = await getCharacters();
  if (id) {
    let characterId = charactersTotal.filter((el) => el.id == id);
    characterId.length
      ? res.status(200).send(characterId)
      : res.status(404).send("No se encontró el personaje");
  }
});
module.exports = router;
