const { Character, Occupation } = require("../db");

const createCharacter = async (req, res) => {
  try {
    let { name, nickName, birthday, image, occupations, createInDb, status } =
      req.body;
    const characterCreate = await Character.create({
      name,
      nickName,
      birthday,
      image,
      // createInDb,
      status,
    });
    const occupationDb = await Occupation.findAll({
      //dentro de este modelo encontrar todas las ocupaciones que coincidan por body
      where: { name: occupations },
    });
    characterCreate.addOccupation(occupationDb);
    //me trae de la tabla esto que le paso
    res.status(200).send("Personaje creado con éxito");
  } catch (error) {
    console.log(error);
    res.status(404).send("Error al crear el personaje");
  }
};
module.exports = createCharacter;
