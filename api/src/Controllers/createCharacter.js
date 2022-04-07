const { Character, Occupation } = require("../db");

const createCharacter = async (req, res) => {
  const { name, nickname, birthday, image, status, createInDb, occupation } =
    req.body;
  const characterCreate = await Character.create({
    name,
    nickname,
    birthday,
    image,
    status,
    createInDb,
  });
  const occupationDb = await Occupation.findAll({
    //dentro de este modelo encontrar todas las ocupaciones que coincidan por body
    where: { name: occupation },
  });
  characterCreate.addOccupation(occupationDb); //me trae de la tabla esto que le paso
  res.send("Personaje creado con éxito");
};

module.exports = createCharacter;
