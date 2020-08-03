"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Room.belongsTo(models.User, { foreignKey: "userId" });
      //Room.hasMany(models.User, { foreignKey: "userId" }); //it screwed inserting at signup
    }
  }
  // Room.belongsToMany(models.User, {
  //   through: "UserRoom",
  //   foreignKey: "roomId",
  //   otherKey: "userId",

  //   //fruit app
  //   Fruit.belongsTo(models.User, { foreignKey: "userId" });
  //   Fruit.belongsToMany(models.Season, {
  //     through: "SeasonFruit",
  //     foreignKey: "fruitId",
  //     otherKey: "seasonId",
  //   });
  // }
  // }
  //   Pokemon.belongsToMany(models.player, {
  //     through: "PlayerPokemon",
  //     foreignKey: "pokemonId",
  //     otherKey: "playerId",
  //   });
  // }
  // }

  Room.init(
    {
      name: DataTypes.STRING,
      img: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
