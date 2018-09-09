module.exports = function(sequelize, DataTypes) {
    var Stats = sequelize.define("Stats", {
      playerName: DataTypes.STRING,
      position: DataTypes.STRING,
      year: DataTypes.STRING,
      gamesPlayed: DataTypes.INTEGER,
      per: DataTypes.DECIMAL(10,3),
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
      fgm: DataTypes.DECIMAL(10,3),
      fga: DataTypes.DECIMAL(10,3),
      threePA: DataTypes.DECIMAL(10,3),
      threePM: DataTypes.DECIMAL(10,3),
      ftm: DataTypes.DECIMAL(10,3),
      fta: DataTypes.DECIMAL(10,3),
      pts: DataTypes.DECIMAL(10,3),
      reb: DataTypes.DECIMAL(10,3),
      oreb:DataTypes.DECIMAL(10,3),
      ast: DataTypes.DECIMAL(10,3),
      stl: DataTypes.DECIMAL(10,3),
      tov: DataTypes.DECIMAL(10,3),
      blk: DataTypes.DECIMAL(10,3),
      fls: DataTypes.DECIMAL(10,3)

    //   rpg: DataTypes.STRING,
    //   complete: DataTypes.BOOLEAN
    // });

//     var teamStats = sequelize.define("TeamStats", {

//         name:"Cleveland Steamers",
//    tag: "CLE",
//    players: DataTypes.ARRAY,
//    possession: DataTypes.BOOLEAN,
//    wonTipOff: DataTypes.BOOLEAN,
//    defense: DataTypes.INTEGER,
//    offense: DataTypes.INTEGER,
//    FGM: DataTypes.INTEGER,
//    FGA: DataTypes.INTEGER,
//    ThreePA: DataTypes.INTEGER,
//    ThreePM: DataTypes.INTEGER,
//    FTM: DataTypes.INTEGER,
//    FTA: DataTypes.INTEGER,
//    PTS: DataTypes.INTEGER,
//    REB: DataTypes.INTEGER,
//    OREB: DataTypes.INTEGER,
//    AST: DataTypes.INTEGER,
//    STL: DataTypes.INTEGER,
//    TOV: DataTypes.INTEGER,
//    BLK: DataTypes.INTEGER,
//    FLS: DataTypes.INTEGER,
//    Q1PTS: DataTypes.INTEGER,
//    Q2PTS: DataTypes.INTEGER,
//    Q3PTS: DataTypes.INTEGER,
//    Q4PTS: DataTypes.INTEGER,
//    OTPTS: DataTypes.INTEGER

    });
    Stats.sync();
    return Stats;
    // return teamStats;
  

//   var Stats2 = sequelize.define("Stats", {
//     text: DataTypes.STRING,
//     complete: DataTypes.BOOLEAN
//   });
//   return Stats2;
 };