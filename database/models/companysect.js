'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companySect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companySect.init({
    compId: DataTypes.STRING,
    compSect: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'companySect',
  });
  return companySect;
};