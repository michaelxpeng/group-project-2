module.exports = function(sequelize, DataTypes) {
    var Stats = sequelize.define("Stats", {
        playerName: DataTypes.STRING,
        year: DataTypes.STRING,
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
        fgm: DataTypes.INTEGER,
        fga: DataTypes.INTEGER,
        threePA: DataTypes.INTEGER,
        threePM: DataTypes.INTEGER,
        ftm: DataTypes.INTEGER,
        fta: DataTypes.INTEGER,
        pts: DataTypes.INTEGER,
        reb: DataTypes.INTEGER,
        oreb:DataTypes.INTEGER,
        ast: DataTypes.INTEGER,
        stl: DataTypes.INTEGER,
        tov: DataTypes.INTEGER,
        blk: DataTypes.INTEGER,
        fls: DataTypes.INTEGER
    });
    Stats.sync();
    return Stats;
 };