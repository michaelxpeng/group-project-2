module.exports = function(sequelize, DataTypes) {
  var Players2016 = sequelize.define("Players2016", {
      playerName: DataTypes.STRING,
      position: DataTypes.STRING,
      year: DataTypes.STRING,
      gamesPlayed: DataTypes.INTEGER,
      tsPCT: DataTypes.DECIMAL(10,3),
      threePAR: DataTypes.DECIMAL(10,3),
      ftR: DataTypes.DECIMAL(10,3),
      orbPCT: DataTypes.DECIMAL(10,3),
      drbPCT: DataTypes.DECIMAL(10,3),
      trbPCT: DataTypes.DECIMAL(10,3),
      astPCT: DataTypes.DECIMAL(10,3),
      stlPCT: DataTypes.DECIMAL(10,3),
      blkPCT: DataTypes.DECIMAL(10,3),
      tovPCT: DataTypes.DECIMAL(10,3),
      usgPCT: DataTypes.DECIMAL(10,3),
      ppg: DataTypes.DECIMAL(10,1),
      rpg: DataTypes.DECIMAL(10,1),
      apg: DataTypes.DECIMAL(10,1),
      fgm: DataTypes.INTEGER,
      fga: DataTypes.INTEGER,
      threePA: DataTypes.INTEGER,
      threePM: DataTypes.INTEGER,
      ftm: DataTypes.INTEGER,
      fta: DataTypes.INTEGER,
      pts: DataTypes.INTEGER,
      reb: DataTypes.INTEGER,
      oreb: DataTypes.INTEGER,
      ast: DataTypes.INTEGER,
      stl: DataTypes.INTEGER,
      tov: DataTypes.INTEGER,
      blk: DataTypes.INTEGER,
      fls: DataTypes.INTEGER,
      salary: DataTypes.INTEGER
  });
  Players2016.sync();
  return Players2016;
};