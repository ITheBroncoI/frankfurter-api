'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Divisas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Divisas.init({
    nombre: DataTypes.STRING,
    simbolo: DataTypes.STRING,
    codigo: DataTypes.STRING,
    pais: DataTypes.STRING,
    tasa: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Divisas',
  });
  return Divisas;
};