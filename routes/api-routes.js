var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/stats", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Stats.findAll({}).then(function(results) {
      // We have access to the todos as an argument inside of the callback function
      console.log(results);
      res.json(results);
    });
  });


  // POST route for saving a new todo
  app.post("/api/stats", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Stats.create({
    playerName: req.body.playerName,
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
    }).then(function(results) {
        console.log(results);
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo we want to delete from
  // req.params.id
  app.delete("/api/stats/:id", function(req, res) {

  });

  // PUT route for updating todos. We can get the updated todo from req.body
  app.put("/api/stats", function(req, res) {

  });
};
