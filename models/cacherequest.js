module.exports = function(sequelize, DataTypes) {
  var CacheRequest = sequelize.define("CacheRequest", {
    url: DataTypes.STRING,
    data: DataTypes.TEXT
  });
  CacheRequest.sync();
  return CacheRequest;
};