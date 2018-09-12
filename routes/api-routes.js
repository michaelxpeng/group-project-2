var db = require("../models");
const request = require("request");

// Store and retrieve cache data from the database
function getCacheRequest(url, cb) {
  // Find the retrieved data
  // Use db.CacheRequest to find the retrieved data
  db.CacheRequest.findAll({
    where: {
      url: url
    }
  }).then(function (results) {
    // If it finds the data, 
    if (typeof (results) !== "undefined" && Array.isArray(results) && results.length > 0) {
      console.log("found as an array");
      // Run the callback with the data as input
      console.log(JSON.parse(results[0].dataValues.data));
      cb(results[0].dataValues.data);
    }
    // Else
    else {
      console.log("cannot find it")
      // Call the API
      // Retrieve the data from the API request
      request(url, (error, response, body) => {
        if (error) {
          console.log(error);
        } else {
          // Store the data into CacheRequest database
          // console.log(body);
          db.CacheRequest.create({
            url: url,
            data: body
          }).then(function (CacheRequestResult) {
            // Run the callback with the data as input
            // console.log(CacheRequestResult);
            console.log(JSON.parse(CacheRequestResult[0].dataValues.data));
            cb(CacheRequestResult[0].dataValues.data);
          });
        }
      });
    }
  });
};

// Routes
// =============================================================
module.exports = function (app) {

  // Call the API
  app.get("/api/cache/:apirequest", (req, res) => {
    // Encode the API for apirequest wildcard
    var url = Buffer.from(decodeURIComponent(req.params.apirequest), "base64").toString("ascii");
    // Return the result from the API call
    getCacheRequest(url, function (CacheRequestResult) {
      console.log(CacheRequestResult);
    });
  });

  // Find the cached data for teams in the 2017 season
  app.get("/api/2017teamscache/", function (req, res) {
    // Display all the data in the CacheRequest database
    db.CacheRequest.findAll({

    }).then(function (results) {
      // Send data to the page
      res.json(results);

      // Run a for loop to find all the players in the 2017 season
      // Find all the teams first from results
      for (var i = 0; i < results.length; i++) {
        var team = JSON.parse(results[i].dataValues.data);
        // console.log("------------------");
        // console.log("TEAM: " + team.name);
        // Create an instance for the Teams model
        db.Teams.create({
          season: team.season.year,
          teamName: team.name,
          teamID: team.id
        });
        // Loop through all the teams' players
        // for (var j = 0; j < team.players.length; j++) {
        //   var playerName = team.players[j].full_name;
        //   var playerID = team.players[j].id;
          // console.log("Name: " + playerName);
          // console.log("ID: " + playerID);

        //   // Create an instance for the Players model
        //   db.Players.create({
        //     playerName: playerName,
        //     playerID: playerID
        //   });
        // };
      };
    });
  });

  // Find stored data for all players in the 2017 season
  // app.get("/api/players", function (req, res) {
  //   db.Players.findAll({

  //   }).then(function (results) {
  //     // Display all data to the page
  //     res.json(results);
  //   });
  // });

  // Find stored data for all teams in the 2017 season
  app.get("/api/teams", function (req, res) {
    db.Teams.findAll({

    }).then(function (results) {
      // Display all data to the page
      res.json(results);
    });
  });

  // Find the cached data for teams in the 2017 season
  app.get("/api/2017playerscache/", function (req, res) {
    db.CacheRequest.findAll({

    }).then(function (results) {
      res.json(results);
      // console.log(JSON.parse(results[0].dataValues.data).players[0].average);

      for (var i = 0; i < 30; i++) {
        // results.length = 30
        // Loop through all 30 teams
        var team = JSON.parse(results[i].dataValues.data);
        for (var j = 0; j < team.players.length; j++) {
          var player = team.players[j];
          var playerTotal = team.players[j].total;
          var playerAverage = team.players[j].average;
          var ownPossession = 0.5 * ((team.own_record.total.field_goals_att + 0.4 * team.own_record.total.free_throws_att - 1.07 * (team.own_record.total.offensive_rebounds / (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds)) * (team.own_record.total.field_goals_att - team.own_record.total.field_goals_made) + team.own_record.total.turnovers) + (team.opponents.total.field_goals_att + 0.4 * team.opponents.total.free_throws_att - 1.07 * (team.opponents.total.offensive_rebounds / (team.opponents.total.offensive_rebounds + team.own_record.total.defensive_rebounds)) * (team.opponents.total.field_goals_att - team.opponents.total.field_goals_made) + team.opponents.total.turnovers));
          var oppPossession = 0.5 * ((team.opponents.total.field_goals_att + 0.4 * team.opponents.total.free_throws_att - 1.07 * (team.opponents.total.offensive_rebounds / (team.opponents.total.offensive_rebounds + team.own_record.total.defensive_rebounds)) * (team.opponents.total.field_goals_att - team.opponents.total.field_goals_made) + team.opponents.total.turnovers) + (team.own_record.total.field_goals_att + 0.4 * team.own_record.total.free_throws_att - 1.07 * (team.own_record.total.offensive_rebounds / (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds)) * (team.own_record.total.field_goals_att - team.own_record.total.field_goals_made) + team.own_record.total.turnovers));

          var playerName = player.full_name;
          console.log("-------------")
          console.log("Name: " + playerName);
          var position = player.position;
          console.log("Position: " + position);
          var year = team.season.year;
          console.log("Year: " + year);
          var gamesPlayed = playerTotal.games_played;
          console.log("Games played: " + gamesPlayed)
          var tsPCT = (playerTotal.points / (2 * (playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att)))).toFixed(3);
          console.log("tsPCT: " + tsPCT);
          var threePAR = (playerTotal.three_points_att / playerTotal.field_goals_att).toFixed(3);
          console.log("threePAR: " + threePAR);
          var ftR = (playerTotal.free_throws_att / playerTotal.field_goals_att).toFixed(3);
          console.log("ftR: " + ftR);
          var orbPCT = (100 * (playerTotal.offensive_rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds))).toFixed(1);
          console.log("orbPCT: " + orbPCT);
          var drbPCT = (100 * (playerTotal.defensive_rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.defensive_rebounds + team.opponents.total.offensive_rebounds))).toFixed(1);
          console.log("drbPCT: " + drbPCT);
          var trbPCT = (100 * (playerTotal.rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.rebounds + team.opponents.total.rebounds))).toFixed(1);
          console.log("trbPCT: " + trbPCT);
          var astPCT = (100 * playerTotal.assists / (((playerTotal.minutes / (team.own_record.total.minutes / 5)) * team.own_record.total.field_goals_made) - playerTotal.field_goals_made)).toFixed(1);
          console.log("astPCT: " + astPCT);
          var stlPCT = (100 * (playerTotal.steals * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * oppPossession)).toFixed(1);
          console.log("stlPCT: " + stlPCT);
          var blkPCT = (100 * (playerTotal.blocks * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.opponents.total.field_goals_att - team.opponents.total.three_points_att))).toFixed(1);
          console.log("blkPCT: " + blkPCT);
          var tovPCT = (100 * playerTotal.turnovers / (playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att) + playerTotal.turnovers)).toFixed(1);
          console.log("tovPCT: " + tovPCT);
          var usgPCT = parseFloat((100 * ((playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att) + playerTotal.turnovers) * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.field_goals_att + (0.44 * team.own_record.total.free_throws_att) + team.own_record.total.turnovers))).toFixed(1));
          console.log("usgPCT: " + usgPCT);
          var ppg = parseFloat(playerAverage.points);
          console.log("PPG: " + ppg);
          var rpg = parseFloat(playerAverage.rebounds);
          console.log("RPG: " + rpg);
          var apg = parseFloat(playerAverage.assists);
          console.log("APG: " + apg);
          var fgm = playerTotal.field_goals_made;
          console.log("fgm: " + fgm);
          var fga = playerTotal.field_goals_att;
          console.log("fga: " + fga);
          var threePA = playerTotal.three_points_att;
          console.log("threePA: " + threePA);
          var threePM = playerTotal.three_points_made;
          console.log("threePM: " + threePM);
          var ftm = playerTotal.free_throws_made;
          console.log("ftm: " + ftm);
          var fta = playerTotal.free_throws_att;
          console.log("fta: " + fta);
          var pts = playerTotal.points;
          console.log("pts: " + pts);
          var reb = playerTotal.rebounds;
          console.log("reb: " + reb);
          var oreb = playerTotal.offensive_rebounds;
          console.log("oreb: " + oreb);
          var ast = playerTotal.assists;
          console.log("ast: " + ast);
          var stl = playerTotal.steals;
          console.log("stl: " + stl);
          var tov = playerTotal.turnovers;
          console.log("tov: " + tov);
          var blk = playerTotal.blocks;
          console.log("blk: " + blk);
          var fls = playerTotal.personal_fouls;
          console.log("fls: " + fls);
          var salary = Math.round((((ppg + rpg + apg + usgPCT) / 2) * 100) / 1.2);
          console.log("Salary: $" + salary);

          db.Players2017.create({
            playerName: playerName,
            position: position,
            year: year,
            gamesPlayed: gamesPlayed,
            tsPCT: tsPCT,
            threePAR: threePAR,
            ftR: ftR,
            orbPCT: orbPCT,
            drbPCT: drbPCT,
            trbPCT: trbPCT,
            astPCT: astPCT,
            stlPCT: stlPCT,
            blkPCT: blkPCT,
            tovPCT: tovPCT,
            usgPCT: usgPCT,
            ppg: ppg,
            rpg: rpg,
            apg: apg,
            fgm: fgm,
            fga: fga,
            threePA: threePA,
            threePM: threePM,
            ftm: ftm,
            fta: fta,
            pts: pts,
            reb: reb,
            oreb: oreb,
            ast: ast,
            stl: stl,
            tov: tov,
            blk: blk,
            fls: fls,
            salary: salary
          });
        };
      };

    });
  });

  app.get("/api/players2017/", function (req, res) {
    db.Players2017.findAll({

    }).then(function (results) {
      res.send(results);
    });
  });
  

  app.get("/api/2016playerscache/", function (req, res) {
    db.CacheRequest.findAll({

    }).then(function (results) {
      res.json(results);
      // console.log(JSON.parse(results[0].dataValues.data).players[0].average);

      for (var i = 30; i < 60; i++) {
        // results.length = 30
        // Loop through all 30 teams
        var team = JSON.parse(results[i].dataValues.data);
        for (var j = 0; j < team.players.length; j++) {
          var player = team.players[j];
          var playerTotal = team.players[j].total;
          var playerAverage = team.players[j].average;
          var ownPossession = 0.5 * ((team.own_record.total.field_goals_att + 0.4 * team.own_record.total.free_throws_att - 1.07 * (team.own_record.total.offensive_rebounds / (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds)) * (team.own_record.total.field_goals_att - team.own_record.total.field_goals_made) + team.own_record.total.turnovers) + (team.opponents.total.field_goals_att + 0.4 * team.opponents.total.free_throws_att - 1.07 * (team.opponents.total.offensive_rebounds / (team.opponents.total.offensive_rebounds + team.own_record.total.defensive_rebounds)) * (team.opponents.total.field_goals_att - team.opponents.total.field_goals_made) + team.opponents.total.turnovers));
          var oppPossession = 0.5 * ((team.opponents.total.field_goals_att + 0.4 * team.opponents.total.free_throws_att - 1.07 * (team.opponents.total.offensive_rebounds / (team.opponents.total.offensive_rebounds + team.own_record.total.defensive_rebounds)) * (team.opponents.total.field_goals_att - team.opponents.total.field_goals_made) + team.opponents.total.turnovers) + (team.own_record.total.field_goals_att + 0.4 * team.own_record.total.free_throws_att - 1.07 * (team.own_record.total.offensive_rebounds / (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds)) * (team.own_record.total.field_goals_att - team.own_record.total.field_goals_made) + team.own_record.total.turnovers));

          var playerName = player.full_name;
          console.log("-------------")
          console.log("Name: " + playerName);
          var position = player.position;
          console.log("Position: " + position);
          var year = team.season.year;
          console.log("Year: " + year);
          var gamesPlayed = playerTotal.games_played;
          console.log("Games played: " + gamesPlayed)
          var tsPCT = (playerTotal.points / (2 * (playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att)))).toFixed(3);
          console.log("tsPCT: " + tsPCT);
          var threePAR = (playerTotal.three_points_att / playerTotal.field_goals_att).toFixed(3);
          console.log("threePAR: " + threePAR);
          var ftR = (playerTotal.free_throws_att / playerTotal.field_goals_att).toFixed(3);
          console.log("ftR: " + ftR);
          var orbPCT = (100 * (playerTotal.offensive_rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.offensive_rebounds + team.opponents.total.defensive_rebounds))).toFixed(1);
          console.log("orbPCT: " + orbPCT);
          var drbPCT = (100 * (playerTotal.defensive_rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.defensive_rebounds + team.opponents.total.offensive_rebounds))).toFixed(1);
          console.log("drbPCT: " + drbPCT);
          var trbPCT = (100 * (playerTotal.rebounds * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.rebounds + team.opponents.total.rebounds))).toFixed(1);
          console.log("trbPCT: " + trbPCT);
          var astPCT = (100 * playerTotal.assists / (((playerTotal.minutes / (team.own_record.total.minutes / 5)) * team.own_record.total.field_goals_made) - playerTotal.field_goals_made)).toFixed(1);
          console.log("astPCT: " + astPCT);
          var stlPCT = (100 * (playerTotal.steals * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * oppPossession)).toFixed(1);
          console.log("stlPCT: " + stlPCT);
          var blkPCT = (100 * (playerTotal.blocks * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.opponents.total.field_goals_att - team.opponents.total.three_points_att))).toFixed(1);
          console.log("blkPCT: " + blkPCT);
          var tovPCT = (100 * playerTotal.turnovers / (playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att) + playerTotal.turnovers)).toFixed(1);
          console.log("tovPCT: " + tovPCT);
          var usgPCT = parseFloat((100 * ((playerTotal.field_goals_att + (0.44 * playerTotal.free_throws_att) + playerTotal.turnovers) * (team.own_record.total.minutes / 5)) / (playerTotal.minutes * (team.own_record.total.field_goals_att + (0.44 * team.own_record.total.free_throws_att) + team.own_record.total.turnovers))).toFixed(1));
          console.log("usgPCT: " + usgPCT);
          var ppg = parseFloat(playerAverage.points);
          console.log("PPG: " + ppg);
          var rpg = parseFloat(playerAverage.rebounds);
          console.log("RPG: " + rpg);
          var apg = parseFloat(playerAverage.assists);
          console.log("APG: " + apg);
          var fgm = playerTotal.field_goals_made;
          console.log("fgm: " + fgm);
          var fga = playerTotal.field_goals_att;
          console.log("fga: " + fga);
          var threePA = playerTotal.three_points_att;
          console.log("threePA: " + threePA);
          var threePM = playerTotal.three_points_made;
          console.log("threePM: " + threePM);
          var ftm = playerTotal.free_throws_made;
          console.log("ftm: " + ftm);
          var fta = playerTotal.free_throws_att;
          console.log("fta: " + fta);
          var pts = playerTotal.points;
          console.log("pts: " + pts);
          var reb = playerTotal.rebounds;
          console.log("reb: " + reb);
          var oreb = playerTotal.offensive_rebounds;
          console.log("oreb: " + oreb);
          var ast = playerTotal.assists;
          console.log("ast: " + ast);
          var stl = playerTotal.steals;
          console.log("stl: " + stl);
          var tov = playerTotal.turnovers;
          console.log("tov: " + tov);
          var blk = playerTotal.blocks;
          console.log("blk: " + blk);
          var fls = playerTotal.personal_fouls;
          console.log("fls: " + fls);
          var salary = Math.round((((ppg + rpg + apg + usgPCT) / 2) * 100) / 1.2);
          console.log("Salary: $" + salary);
          
          db.Players2016.create({
            playerName: playerName,
            position: position,
            year: year,
            gamesPlayed: gamesPlayed,
            tsPCT: tsPCT,
            threePAR: threePAR,
            ftR: ftR,
            orbPCT: orbPCT,
            drbPCT: drbPCT,
            trbPCT: trbPCT,
            astPCT: astPCT,
            stlPCT: stlPCT,
            blkPCT: blkPCT,
            tovPCT: tovPCT,
            usgPCT: usgPCT,
            ppg: ppg,
            rpg: rpg,
            apg: apg,
            fgm: fgm,
            fga: fga,
            threePA: threePA,
            threePM: threePM,
            ftm: ftm,
            fta: fta,
            pts: pts,
            reb: reb,
            oreb: oreb,
            ast: ast,
            stl: stl,
            tov: tov,
            blk: blk,
            fls: fls,
            salary: salary
          });
        };
      };

    });
  });

  app.get("/api/players2016/", function (req, res) {
    db.Players2016.findAll({

    }).then(function (results) {
      res.send(results);
    });
  });
};
