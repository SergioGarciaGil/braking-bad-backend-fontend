// const axios = require("axios");

// const getApiInfo = async () => {
//   const apiUrl = await axios.get(
//     "https://www.breakingbadapi.com/api/characters"
//   );
//   const apiInfo = apiUrl.data.map((el) => {
//     //me va atraer la informacion de la api
//     return {
//       name: el.name,
//       imagen: el.img,
//       nickname: el.nickname,
//       status: el.status,
//       id: el.char_id,
//       occupation: el.occupation,
//       birthday: el.birthday,
//       appearance: el.appearance.map((el) => el),
//     };
//   });
//   return apiInfo;
// };
// module.exports = getApiInfo;
