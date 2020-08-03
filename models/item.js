"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init(
    {
      sofa_img: DataTypes.STRING,
      chair_img: DataTypes.STRING,
      stable_img: DataTypes.STRING,
      ctable_img: DataTypes.STRING,
      carpet_img: DataTypes.STRING,
      painting_img: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
