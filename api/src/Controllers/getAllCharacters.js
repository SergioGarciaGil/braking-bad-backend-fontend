const { Router } = require("express");

const axios = require("axios");
const { Character, Occupation } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

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
const getCharacters = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

const getAllCharacters = async (req, res) => {
  const name = req.query.name; //pregunta si hay hay un query con esta propiedad name
  let charactersTotal = await getCharacters();
  if (name) {
    let characterName = charactersTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    characterName.length //encontrate algo?
      ? res.status(200).send(characterName)
      : res.status(404).send("No se encontro ningun personaje con ese nombre");
  } else {
    res.status(200).send(charactersTotal);
  }
};

module.exports = getAllCharacters;
