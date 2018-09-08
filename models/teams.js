module.exports = function(sequelize, DataTypes) {
  var Teams = sequelize.define("Teams", {
    season: DataTypes.STRING,
    teamName: DataTypes.STRING,
    teamID: DataTypes.STRING,
  });
  Teams.sync();
  return Teams;
};