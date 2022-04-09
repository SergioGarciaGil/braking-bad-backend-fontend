const { Router } = require("express");
const getTotal = require("../Controllers/Services/getTotal");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getAllCharacters = async (req, res) => {
  const name = req.query.name; //pregunta si hay hay un query con esta propiedad name
  const charactersTotal = await getTotal();
  if (name) {
    const characterName = charactersTotal.filter((el) =>
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
