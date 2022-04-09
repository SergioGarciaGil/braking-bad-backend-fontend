const { Character, Occupation } = require("../../db");

const getDbInfo = async () => {
  //me va atraer la informacion de la base de datos
  return await Character.findAll({
    //le pido que me tariga todos los personajes y ademas me incluya el modelo de ocupacion
    include: {
      model: Occupation,
      atributes: ["name"], // traemos atributo de la tabla occupation
      through: {
        atributes: [],
      },
    },
  });
};

module.exports = getDbInfo;
