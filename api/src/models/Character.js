const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, //va hacer la clave primaria el id
      allowNull: false, // campo requerido que no permite que este vacio
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Alive", "Descarted", "Presumed Dead", "Unknown"),
      allowNull: true, /// status no es obligatorio,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true, //imagen no es obligatoria
    },
    createInDb: {
      // esta propiedad me sirve para saber si el registro fue creado en la base de datos y es mas facil acceder al peronaje por medio de esta propiedad

      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // todo lo que yo cee se van a crear con esta propiedad
    },
  });
};
