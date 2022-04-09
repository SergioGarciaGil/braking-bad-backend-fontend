const getTotal = require("../Controllers/Services/getTotal");

const getById = async (req, res) => {
  const id = req.params.id;
  const charactersTotal = await getTotal();
  if (id) {
    const characterId = charactersTotal.filter((el) => el.id == id);
    characterId.length
      ? res.status(200).send(characterId)
      : res.status(404).send("No se encontró el personaje");
  }
};

module.exports = getById;
