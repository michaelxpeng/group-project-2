$(document).ready(function() {
    // Getting a reference to the input field where user adds a new todo
    // var $newItemInput = $("input.new-item");
    // var $newStatInput = $("input.new-stat");
    // // Our new todos will go inside the todoContainer
    // var $todoContainer = $(".todo-container");
    // // Adding event listeners for deleting, editing, and adding todos
    // // $(document).on("click", "button.delete", deleteStats);
    // // $(document).on("click", "button.complete", toggleComplete);
    // $(document).on("click", ".todo-item", editStats);
    // $(document).on("keyup", ".todo-item", finishEdit);
    // $(document).on("blur", ".todo-item", cancelEdit);
    //  $(document).on("submit", "#todo-form", insertStats);
  
    // Our initial stats array
    var stats = [];
    var playerName = "Kyrie Irving";
    var year = "2017-2018";
    var per = 25.0;
    var tsPCT = .610;
    var threePAR = .374;
    var ftR = .240; 
    var orbPCT = 1.9;                                                                                             
    var drbPCT = 10.8;
    var trbPCT = 6.4; 
    var astPCT = 30.7; 
    var stlPCT = 1.7; 
    var blkPCT = 0.7; 
    var tovPCT = 10.4; 
    var usgPCT= 31.0;
    var fgm = 0; 
    var fga = 0;
    var threePA = 0; 
    var threePM = 0;
    var ftm = 0;
    var fta = 0;
    var pts = 0;
    var reb = 0;
    var oreb = 0;
    var ast = 0;
    var stl = 0;
    var tov = 0;
    var blk = 0;
    var fls = 0;

  

    

    // Getting todos from database when page loads
    getStats();
    insertStats();
    // updateStats();
  
    // This function resets the todos displayed with new todos from the database
    // function initializeRows() {
    //   $todoContainer.empty();
    //   var rowsToAdd = [];
    //   for (var i = 0; i < stats.length; i++) {
    //     rowsToAdd.push(createNewStats(stats[i]));
    //   }
    //   $todoContainer.prepend(rowsToAdd);
    // }
  
    // This function grabs todos from the database and updates the view
    function getStats() {
      $.get("/api/stats", function(data) {
        stats = data;
        // initializeRows();
      });
    }

    // function getTeamStats() {
    //   $.get("/api/team-stats", function(data) {
    //     stats = data;
    //     // initializeRows();
    //   });
    // }
  

    function insertStats(event) {
      // event.preventDefault();
      
      var stats = {
        playerName: playerName,
        year: year,
        per: per,
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
        fls: fls
    
        // text: $newItemInput.val().trim(),
        // complete: false
      };

  //     function insertTeamStats(event) {

  //       name: name,
  //  tag: tag,
  //  players,
  //  possession = true,
  //  wonTipOff = false,
  //  defense = 90,
  //  offense = 92,
  //  FGM = 0,
  //  FGA = 0,
  //  ThreePA = 0,
  //  ThreePM = 0,
  //  FTM = 0,
  //  FTA = 0,
  //  PTS = 0,
  //  REB = 0,
  //  OREB = 0,
  //  AST = 0,
  //  STL = 0,
  //  TOV = 0,
  //  BLK = 0,
  //  FLS = 0,
  //  Q1PTS = 0,
  //  Q2PTS = 0,
  //  Q3PTS = 0,
  //  Q4PTS = 0,
  //  OTPTS = 0;


      // var stats2 = {
      //   text: statistic2,
      //   complete: false
      // }
  
      $.post("/api/stats", stats, getStats);
      // $newItemInput.val("");
        playerName;
        year;
        per;
        tsPCT;
        threePAR;
        ftR;
        orbPCT;
        drbPCT;
        trbPCT;
        astPCT;
        stlPCT;
        blkPCT;
        tovPCT;
        usgPCT;
        fgm;
        fga;
        threePA;
        threePM;
        ftm;
        fta;
        pts;
        reb;
        oreb;
        ast;
        stl;
        tov;
        blk;
        fls;
    
    }
  });
    // This function deletes a todo when the user clicks the delete button
    // function deleteStats(event) {
    //   event.stopPropagation();
    //   var id = $(this).data("id");
    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/stats/" + id
    //   }).then(getStats);
    // }
  
    // This function handles showing the input box for a user to edit a todo
    // function editStats() {
    //   var currentStats = $(this).data("todo");
    //   $(this).children().hide();
    //   $(this).children("input.edit").val(currentStats.text);
    //   $(this).children("input.edit").show();
    //   $(this).children("input.edit").focus();
    // }
  
    // Toggles complete status
    // function toggleComplete(event) {
    //   event.stopPropagation();
    //   var stats = $(this).parent().data("todo");
    //   stats.complete = !stats.complete;
    //   updateStats(stats);
    // }
  
    // This function starts updating a todo in the database if a user hits the "Enter Key"
    // While in edit mode
    // function finishEdit(event) {
    //   var updatedStats = $(this).data("todo");
    //   if (event.which === 13) {
    //     updatedStats.text = $(this).children("input").val().trim();
    //     $(this).blur();
    //     updateStats(updatedStats);
    //   }
    // }
  
   // This function updates a todo in our database
    // function updateStats(stats) {
    //   $.ajax({
    //     method: "PUT",
    //     url: "/api/stats",
    //     data: stats
    //   }).then(getStats);
    // }
  
    // This function is called whenever a todo item is in edit mode and loses focus
    // This cancels any edits being made
    // function cancelEdit() {
    //   var currentStats = $(this).data("todo");
    //   if (currentStats) {
    //     $(this).children().hide();
    //     $(this).children("input.edit").val(currentStats.text);
    //     $(this).children("span").show();
    //     $(this).children("button").show();
    //   }
    // }
  
    // This function constructs a todo-item row
    // function createNewStats(stats) {
    //   var $newInputRow = $(
    //     [
    //       "<li class='list-group-item todo-item'>",
    //       "<span>",
    //       stats.text,
    //       "</span>",
    //       "<input type='text' class='edit' style='display: none;'>",
    //       "<button class='delete btn btn-danger'>x</button>",
    //       "<button class='complete btn btn-primary'>✓</button>",
    //       "</li>"
    //     ].join("")
    //   );
  
    //   $newInputRow.find("button.delete").data("id", stats.id);
    //   $newInputRow.find("input.edit").css("display", "none");
    //   $newInputRow.data("todo", stats);
    //   if (stats.complete) {
    //     $newInputRow.find("span").css("text-decoration", "line-through");
    //   }
    //   return $newInputRow;
    // }
  
    // This function inserts a new todo into our database and then updates the view
    