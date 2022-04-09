// const getTotal = require("./getAllCharacters");
const axios = require("axios");
const { Character, Occupation } = require("../db");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    "https://www.breakingbadapi.com/api/characters"
  );
  const apiInfo = apiUrl.data.map((el) => {
    //me va atraer la informacion de la api
    return {
      name: el.name,
      imagen: el.img,
      nickname: el.nickname,
      status: el.status,
      id: el.char_id,
      occupation: el.occupation,
      birthday: el.birthday,
      appearance: el.appearance.map((el) => el),
    };
  });
  return apiInfo;
};
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
const getTotal = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};
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
