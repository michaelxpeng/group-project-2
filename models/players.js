module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define("Players", {
    playerName: DataTypes.STRING,
    playerID: DataTypes.STRING
  });
  Players.sync();
  return Players;
};