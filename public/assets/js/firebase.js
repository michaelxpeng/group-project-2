// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_PVkwDiphyNCRdbZ63bDZ95-Lj7cP0r8",
  authDomain: "rcb-fantasydraft.firebaseapp.com",
  databaseURL: "https://rcb-fantasydraft.firebaseio.com",
  projectId: "rcb-fantasydraft",
  storageBucket: "rcb-fantasydraft.appspot.com",
  messagingSenderId: "308196846996"
};
firebase.initializeApp(config);

var dataRef = firebase.database();

$("#button1").on("click", function (event) {
  // prevent form from submitting
  event.preventDefault();

  var userName = $('#user-name').val().trim();
  console.log(userName);

  var userPassword = $('#user-password').val().trim();
  console.log(userPassword);


  var userEmail = $('#user-email').val().trim();
  console.log(userEmail);

  var newUser = {
    userName: userName,
    userPassword: userPassword,
    userEmail: userEmail,

  }

  //push user info to database
  dataRef.ref().push(newUser);

  //Logs user info to console
  console.log(newUser.userName);
  console.log(newUser.userPassword);
  console.log(newUser.userEmail);

});

//clears inputs

$("#user-name").val("");
$("#user-password").val("");
$("#user-email").val("");

// return false;


$("#save-team").on("click", function () {
  // prevent form from submitting
  event.preventDefault();

  function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
  }

  var teamName = $('#team-name-input').val().trim();
  var teamTag = $('#team-tag-input').val().trim().toUpperCase();
  var teamImageURL = $('#team-image-input').val().trim();

  if(teamImageURL != ""){
    if(checkURL(teamImageURL)){}
    else{
        alert('If Using a Team Image, Please Enter a Valid URL')
    }
  }

  if($('#PG-row').attr('name') === "" || $('#SG-row').attr('name') === "" || $('#PF-row').attr('name') === "" || $('#SF-row').attr('name') === "" || $('#C-row').attr('name') === "" || $('#PG-row').attr('name') === undefined || $('#SG-row').attr('name') === undefined || $('#PF-row').attr('name') === undefined || $('#SF-row').attr('name') === undefined || $('#C-row').attr('name') === undefined){
      alert("All Positions Need to Be Filled")
  }else if(teamName === ""){
      alert('Please Input a Team Name')
  }else if(teamTag === ""){
      alert('Please Input a Team Tag')
  }else if(teamTag.length > 4){
      alert('Team Tag Must Be Between 1 and 4 Characters')
  }else{
    var pg = {
      position: $('#PG-row').attr('position'),
      name: $('#PG-row').attr('name'),
      year: $('#PG-row').attr('year'),
      TSpct: parseFloat($('#PG-row').attr('TSpct')),
      ThreePAr: parseFloat($('#PG-row').attr('ThreePAr')),
      ThreePct: parseFloat($('#PG-row').attr('ThreePCT')),
      FTr: parseFloat($('#PG-row').attr('FTr')),
      FTpct: parseFloat($('#PG-row').attr('FTpct')),
      ORBpct: parseFloat($('#PG-row').attr('ORBpct')),
      DRBpct: parseFloat($('#PG-row').attr('DRBpct')),
      TRBpct: parseFloat($('#PG-row').attr('TRBpct')),
      ASTpct: parseFloat($('#PG-row').attr('ASTpct')),
      STLpct: parseFloat($('#PG-row').attr('STLpct')),
      BLKpct: parseFloat($('#PG-row').attr('BLKpct')),
      TOVpct: parseFloat($('#PG-row').attr('TOVpct')),
      USGpct: parseFloat($('#PG-row').attr('USGpct')),
      salary: parseInt($('#PG-row').attr('salary')),
      FGM: 0,
      FGA: 0,
      ThreePA: 0,
      ThreePM: 0,
      FTM: 0,
      FTA: 0,
      PTS: 0,
      REB: 0,
      OREB: 0,
      AST: 0,
      STL: 0,
      TOV: 0,
      BLK: 0,
      FLS: 0
    };
  
    var sg = {
      position: $('#SG-row').attr('position'),
      name: $('#SG-row').attr('name'),
      year: $('#SG-row').attr('year'),
      TSpct: parseFloat($('#SG-row').attr('TSpct')),
      ThreePAr: parseFloat($('#SG-row').attr('ThreePAr')),
      ThreePct: parseFloat($('#SG-row').attr('ThreePCT')),
      FTr: parseFloat($('#SG-row').attr('FTr')),
      FTpct: parseFloat($('#SG-row').attr('FTpct')),
      ORBpct: parseFloat($('#SG-row').attr('ORBpct')),
      DRBpct: parseFloat($('#SG-row').attr('DRBpct')),
      TRBpct: parseFloat($('#PG-row').attr('TRBpct')),
      ASTpct: parseFloat($('#SG-row').attr('ASTpct')),
      STLpct: parseFloat($('#SG-row').attr('STLpct')),
      BLKpct: parseFloat($('#SG-row').attr('BLKpct')),
      TOVpct: parseFloat($('#SG-row').attr('TOVpct')),
      USGpct: parseFloat($('#SG-row').attr('USGpct')),
      salary: parseInt($('#SG-row').attr('salary')),
      FGM: 0,
      FGA: 0,
      ThreePA: 0,
      ThreePM: 0,
      FTM: 0,
      FTA: 0,
      PTS: 0,
      REB: 0,
      OREB: 0,
      AST: 0,
      STL: 0,
      TOV: 0,
      BLK: 0,
      FLS: 0
    };
  
    var sf = {
      position: $('#SF-row').attr('position'),
      name: $('#SF-row').attr('name'),
      year: $('#SF-row').attr('year'),
      TSpct: parseFloat($('#SF-row').attr('TSpct')),
      ThreePAr: parseFloat($('#SF-row').attr('ThreePAr')),
      ThreePct: parseFloat($('#SF-row').attr('ThreePCT')),
      FTr: parseFloat($('#SF-row').attr('FTr')),
      FTpct: parseFloat($('#SF-row').attr('FTpct')),
      ORBpct: parseFloat($('#SF-row').attr('ORBpct')),
      DRBpct: parseFloat($('#SF-row').attr('DRBpct')),
      TRBpct: parseFloat($('#PG-row').attr('TRBpct')),
      ASTpct: parseFloat($('#SF-row').attr('ASTpct')),
      STLpct: parseFloat($('#SF-row').attr('STLpct')),
      BLKpct: parseFloat($('#SF-row').attr('BLKpct')),
      TOVpct: parseFloat($('#SF-row').attr('TOVpct')),
      USGpct: parseFloat($('#SF-row').attr('USGpct')),
      salary: parseInt($('#SF-row').attr('salary')),
      FGM: 0,
      FGA: 0,
      ThreePA: 0,
      ThreePM: 0,
      FTM: 0,
      FTA: 0,
      PTS: 0,
      REB: 0,
      OREB: 0,
      AST: 0,
      STL: 0,
      TOV: 0,
      BLK: 0,
      FLS: 0
    };
  
    var pf = {
      position: $('#PF-row').attr('position'),
      name: $('#PF-row').attr('name'),
      year: $('#PF-row').attr('year'),
      TSpct: parseFloat($('#PF-row').attr('TSpct')),
      ThreePAr: parseFloat($('#PF-row').attr('ThreePAr')),
      ThreePct: parseFloat($('#PF-row').attr('ThreePCT')),
      FTr: parseFloat($('#PF-row').attr('FTr')),
      FTpct: parseFloat($('#PF-row').attr('FTpct')),
      ORBpct: parseFloat($('#PF-row').attr('ORBpct')),
      DRBpct: parseFloat($('#PF-row').attr('DRBpct')),
      TRBpct: parseFloat($('#PG-row').attr('TRBpct')),
      ASTpct: parseFloat($('#PF-row').attr('ASTpct')),
      STLpct: parseFloat($('#PF-row').attr('STLpct')),
      BLKpct: parseFloat($('#PF-row').attr('BLKpct')),
      TOVpct: parseFloat($('#PF-row').attr('TOVpct')),
      USGpct: parseFloat($('#PF-row').attr('USGpct')),
      salary: parseInt($('#PF-row').attr('salary')),
      FGM: 0,
      FGA: 0,
      ThreePA: 0,
      ThreePM: 0,
      FTM: 0,
      FTA: 0,
      PTS: 0,
      REB: 0,
      OREB: 0,
      AST: 0,
      STL: 0,
      TOV: 0,
      BLK: 0,
      FLS: 0
    };
  
    var c = {
      position: $('#C-row').attr('position'),
      name: $('#C-row').attr('name'),
      year: $('#C-row').attr('year'),
      TSpct: parseFloat($('#C-row').attr('TSpct')),
      ThreePAr: parseFloat($('#C-row').attr('ThreePAr')),
      ThreePct: parseFloat($('#C-row').attr('ThreePCT')),
      FTr: parseFloat($('#C-row').attr('FTr')),
      FTpct: parseFloat($('#C-row').attr('FTpct')),
      ORBpct: parseFloat($('#C-row').attr('ORBpct')),
      DRBpct: parseFloat($('#C-row').attr('DRBpct')),
      TRBpct: parseFloat($('#PG-row').attr('TRBpct')),
      ASTpct: parseFloat($('#C-row').attr('ASTpct')),
      STLpct: parseFloat($('#C-row').attr('STLpct')),
      BLKpct: parseFloat($('#C-row').attr('BLKpct')),
      TOVpct: parseFloat($('#C-row').attr('TOVpct')),
      USGpct: parseFloat($('#C-row').attr('USGpct')),
      salary: parseInt($('#C-row').attr('salary')),
      FGM: 0,
      FGA: 0,
      ThreePA: 0,
      ThreePM: 0,
      FTM: 0,
      FTA: 0,
      PTS: 0,
      REB: 0,
      OREB: 0,
      AST: 0,
      STL: 0,
      TOV: 0,
      BLK: 0,
      FLS: 0
    };
  
    var roster = {
      // logo: logo,
      // teamName: teamName,
      pg: pg,
      sg: sg,
      sf: sf,
      pf: pf,
      c: c,
      name:teamName,
      tag:teamTag,
      image:teamImageURL,
      selected:false,
    }
  
    dataRef.ref().push(roster);
  
    //Logs roster to console
    // console.log(roster.logo);
    // console.log(roster.teamName);
    console.log(roster.pg);
    console.log(roster.sg);
    console.log(roster.sf);
    console.log(roster.pf);
    console.log(roster.c);
  }

  // var logo = $('#logo').val().trim();
  // var teamName = $('#teamName').val().trim();
  
  location.href="/dashboard"
});

//clears inputs
// $("#logo").val("");
// $("#teamName").val("");
// $("#pg").val("");
// $("#sg").val("");
// $("#sf").val("");
// $("#pf").val("");
// $("#c").val("");

// return false;

//third button to display saved user roster onto page
$("#button2").on("click", function (event) {

  dataRef.ref().on("child_added", function (childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    // Store everything into a variable that's coming out of snapshot
    var logoSnap = childSnapshot.val().logo;
    var teamNameSnap = childSnapshot.val().teamName;
    var pgSnap = childSnapshot.val().pg;
    var sgSnap = childSnapshot.val().sg;
    var sfSnap = childSnapshot.val().sf;
    var pfSnap = childSnapshot.val().pf;
    var centerSnap = childSnapshot.val().center;


    // prevent form from submitting
    event.preventDefault();
  });


});