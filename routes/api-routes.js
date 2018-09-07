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
        // Loop through all the teams' players
        for (var j = 0; j < team.players.length; j++) {
          var playerName = team.players[j].full_name;
          var playerID = team.players[j].id;
          console.log(playerName);
          
          // Create an instance for the Players model
          db.Players.create({
            playerName: playerName,
            playerID: playerID
          });
        };
      };

      // Create an instance for the Teams model
      db.Teams.create({
        season: JSON.parse(results[i].dataValues.data).season.year,
        teamName: JSON.parse(results[i].dataValues.data).name,
        teamID: JSON.parse(results[i].dataValues.data).id
      });
    });
  });

  // Find stored data for all players in the 2017 season
  app.get("/api/players", function (req, res) {
    db.Players.findAll({

    }).then(function (results) {
      // Display all data to the page
      res.json(results);
    });
  });

  // Find stored data for all teams in the 2017 season
  app.get("/api/teams", function (req, res) {
    db.Teams.findAll({

    }).then(function (results) {
      // Display all data to the page
      res.json(results);
    });
  });

  // Find the cached data for teams in the 2017 season
  // app.get("/api/2017playerscache/", function (req, res) {
  //   db.CacheRequest.findAll({

  //   }).then(function (results) {
  //     res.json(results[0].dataValues.data);
      // console.log(JSON.parse(results[0].dataValues.data));
      // console.log(seasonTotal);
      // console.log(JSON.parse(results[0].dataValues.data).full_name);
      // console.log(JSON.parse(results[0].dataValues.data).seasons[0].year);
      // Above should return player name in console
      // console.log(results[0].dataValues.data));
      // db.Stats.create({
      //   playerName: JSON.parse(results[1].dataValues.data).full_name,
      //   year: JSON.parse(results[1].dataValues.data).seasons[0].year,
      //   //per: req.body.per,
      //   tsPCT: parseFloat((seasonTotal.points / (2 * (seasonTotal.field_goals_att + (0.44 * seasonTotal.free_throws_att))))).toFixed(3),
      //   threePAR: parseFloat((seasonTotal.three_points_att / seasonTotal.field_goals_att)).toFixed(3),
      //   ftR: parseFloat((seasonTotal.free_throws_att / seasonTotal.field_goals_att)).toFixed(3),
      //   // orbPCT: req.body.orbPCT,
      //   // drbPCT: req.body.drbPCT,
      //   // trbPCT: req.body.trbPCT,
      //   // astPCT: req.body.astPCT,
      //   // stlPCT: req.body.stlPCT,
      //   // blkPCT: req.body.blkPCT,
      //   // tovPCT: req.body.tovPCT,
      //   // usgPCT: req.body.usgPCT,
      //   fgm: parseInt(seasonTotal.field_goals_made),
      //   fga: parseInt(seasonTotal.field_goals_att),
      //   threePA: parseInt(seasonTotal.three_points_att),
      //   threePM: parseInt(seasonTotal.three_points_made),
      //   ftm: parseInt(seasonTotal.free_throws_made),
      //   fta: parseInt(seasonTotal.free_throws_att),
      //   pts: parseInt(seasonTotal.points),
      //   reb: parseInt(seasonTotal.rebounds),
      //   oreb: parseInt(seasonTotal.offensive_rebounds),
      //   ast: parseInt(seasonTotal.assists),
      //   stl: parseInt(seasonTotal.steals),
      //   tov: parseInt(seasonTotal.turnovers),
      //   blk: parseInt(seasonTotal.blocks),
      //   fls: parseInt(seasonTotal.personal_fouls)
      // });
  //   });
  // });
  // ------------

  // app.get("/api/stats/", function (req, res) {
  //   db.Stats.findAll({

  //   }).then(function (results) {
  //     res.send(results);
  //   });
  // });

};
