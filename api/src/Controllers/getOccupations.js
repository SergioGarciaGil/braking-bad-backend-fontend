const axios = require("axios");
const { Occupation } = require("../db");

// const getOccupations = async (req, res) => {
//   const { data } = await axios.get("https://breakingbadapi.com/api/characters");
//   const occupations = data.map((i) => i.occupation);
//   const dbOccupation = occupations.flat();
//   dbOccupation.forEach((i) => {
//     Occupation.findOrCreate({
//       where: {
//         name: i,
//       },
//     });
//   });
//   const allOccupations = await Occupation.findAll();
//   return res.status(200).send(allOccupations);
// };
const getOccupations = async (req, res) => {
  const occupationsApi = await axios.get(
    "https://www.breakingbadapi.com/api/characters"
  );
  const occupations = occupationsApi.data.map((el) => el.occupation); //aqui me trae muchos  arreglos
  const occEach = occupations.map((el) => {
    for (let i = 0; i < el.length; i++)
      //aqui me devuleve cada elemento de  esos arreglos osea desarma todos los arreglos para devolver cada ocupacion
      return el[i];
  });
  console.log(occEach); //aqui guardamos todas las ocupaciones en la base de datos
  occEach.forEach((el) => {
    //tomamos cada ocupacion
    Occupation.findOrCreate({
      //si no lo encuetra lo crea
      where: { name: el }, //donde el nombre sea este elemento que le estoy mapeando
      //si quiero traerme mas atributos de la api solo colocamos  el atributo que quiero traer
    });
  });
  const allOccupations = await Occupation.findAll(); //aqui me trae todas las ocupaciones creadas en la base de datos
  res.send(allOccupations);
};
module.exports = getOccupations;
