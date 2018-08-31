var db = require("../models");
const request = require("request");

// stores and retrieves cache data from the database
function getCacheRequest(url, cb) {
  // find the retrieved data
  // 10 use cacherequest to find the retrieved data
  db.CacheRequest.findAll({
    where: {
      url: url
    }
  }).then(function (results) {
    // 20 if it finds the data, 

    if (typeof (results) !== "undefined" && Array.isArray(results) && results.length > 0) {
      console.log("found as an array");
      // 30 run the callback with the data as input
      console.log(results[0].dataValues.data);
      cb(results[0].dataValues.data);
    }
    // 40 else
    else {
      console.log("cannot find it")
      // 45 calls the API
      // 50 retrieves the data from the API request
      request(url, (error, response, body) => {
        if (error) {
          //errors
          console.log(error);
        } else {
          //no errors
          // 60 stores the data into cacherequest database
          console.log(body);
          db.CacheRequest.create({
            url: url,
            data: body
          }).then(function (CacherequestResult) {
            // 70 run the callback with the data as input
            cb(CacherequestResult.data);
          });
        }
      });
    }
  });
};

// Routes
// =============================================================
module.exports = function (app) {

  // switch statements to hit all the API urls?
  app.get("/api/cache/:apirequest1", (req, res) => {
    var queryURL = Buffer.from(decodeURIComponent(req.params.apirequest1), "base64").toString("ascii");
    getCacheRequest(queryURL, function (CacherequestResult) {
      // console.log(CacherequestResult);
    });
    // request(queryURL, (error, response, body) => {
    //   if (error) {
    //     // If there is an error, tell the user 
    //     res.send("An error occured");
    //   } else {
    //     console.log(JSON.parse(body));
    //     // if it finds the URL in the database, it will pull it from database
    //     // res.json(body);
    //     // after it gets response, it will save the data into database and then return the response
    //     request.post("/api/stats", (error, response, body) => {
    //       if (error) {
    //         //retry after one second
    //       } else {
    //         res.send(response);
    //       }
    //     });
    //   }
    // });
  });

  // after it gets response, it will save the data into database and then return the response
  // if the API rejects the call, it will wait one second to call again

  //table cache
  //id | url | data


  // // POST route for saving a new todo
  // app.post("/api/stats", function (req, res) {
  //   console.log(req.body);

  //   // do database save query here based on req.body

  //   //  then send back response based on database success or error
  //   res.send(req.body);
  // });



  // GET route for getting all of the todos
  app.get("/api/stats/:id", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Stats.findAll({
      where: {
        id: req.params.id
      }     
    }).then(function (results) {
      // We have access to the todos as an argument inside of the callback function
      // console.log(results);
      res.json(results);
    });
  });


  // POST route for saving a new todo
  app.post("/api/stats", function (req, res) {
    // console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    
    db.Stats.create({
      playerName: req.body.name,
      year: req.body.year,
      per: req.body.per,
      tsPCT: req.body.tsPCT,
      threePAR: req.body.threePAR,
      ftR: req.body.ftR,
      orbPCT: req.body.orbPCT,
      drbPCT: req.body.drbPCT,
      trbPCT: req.body.trbPCT,
      astPCT: req.body.astPCT,
      stlPCT: req.body.stlPCT,
      blkPCT: req.body.blkPCT,
      tovPCT: req.body.tovPCT,
      usgPCT: req.body.usgPCT,
      fgm: req.body.fgm,
      fga: req.body.fga,
      threePA: req.body.threePA,
      threePM: req.body.threePM,
      ftm: req.body.ftm,
      fta: req.body.fta,
      pts: req.body.pts,
      reb: req.body.reb,
      oreb: req.body.oreb,
      ast: req.body.ast,
      stl: req.body.stl,
      tov: req.body.tov,
      blk: req.body.blk,
      fls: req.body.fls
    }).then(function (results) {
      // console.log(results);
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/stats/:id", function (req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/stats", function (req, res) {

  });
};
