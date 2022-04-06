const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("occupation", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
// no le vamos a pasasr el id por que en este caso no vamos a tener otro tipo de ocupacion salvo los que tenemos en base de datos
