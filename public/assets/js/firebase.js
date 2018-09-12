// {/* <script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script> */}

// Initialize Firebase
var config = {
  // apiKey: "AIzaSyA4TzoxRV5oRyYlHqT6lvmxIJxBHPYp4co",
  // authDomain: "fantasy-draft-1f6a6.firebaseapp.com",
  // databaseURL: "https://fantasy-draft-1f6a6.firebaseio.com",
  // projectId: "fantasy-draft-1f6a6",
  // storageBucket: "fantasy-draft-1f6a6.appspot.com",
  // messagingSenderId: "271694339648"

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

  // var logo = $('#logo').val().trim();
  // var teamName = $('#teamName').val().trim();
  var pg = {
    position: $('#PG-row').attr('position'),
    name: $('#PG-row').attr('name'),
    TSpct: $('#PG-row').attr('TSpct'),
    ThreePAr: $('#PG-row').attr('ThreePAr'),
    ThreePCT: $('#PG-row').attr('ThreePCT'),
    FTr: $('#PG-row').attr('FTr'),
    FTpct: $('#PG-row').attr('FTpct'),
    ORBpct: $('#PG-row').attr('ORBpct'),
    DRBpct: $('#PG-row').attr('DRBpct'),
    ASTpct: $('#PG-row').attr('ASTpct'),
    STLpct: $('#PG-row').attr('STLpct'),
    BLKpct: $('#PG-row').attr('BLKpct'),
    TOVpct: $('#PG-row').attr('TOVpct'),
    USGpct: $('#PG-row').attr('USGpct')
  };

  var sg = {
    position: $('#SG-row').attr('position'),
    name: $('#SG-row').attr('name'),
    TSpct: $('#SG-row').attr('TSpct'),
    ThreePAr: $('#SG-row').attr('ThreePAr'),
    ThreePCT: $('#SG-row').attr('ThreePCT'),
    FTr: $('#SG-row').attr('FTr'),
    FTpct: $('#SG-row').attr('FTpct'),
    ORBpct: $('#SG-row').attr('ORBpct'),
    DRBpct: $('#SG-row').attr('DRBpct'),
    ASTpct: $('#SG-row').attr('ASTpct'),
    STLpct: $('#SG-row').attr('STLpct'),
    BLKpct: $('#SG-row').attr('BLKpct'),
    TOVpct: $('#SG-row').attr('TOVpct'),
    USGpct: $('#SG-row').attr('USGpct')
  };

  var sf = {
    position: $('#SF-row').attr('position'),
    name: $('#SF-row').attr('name'),
    TSpct: $('#SF-row').attr('TSpct'),
    ThreePAr: $('#SF-row').attr('ThreePAr'),
    ThreePCT: $('#SF-row').attr('ThreePCT'),
    FTr: $('#SF-row').attr('FTr'),
    FTpct: $('#SF-row').attr('FTpct'),
    ORBpct: $('#SF-row').attr('ORBpct'),
    DRBpct: $('#SF-row').attr('DRBpct'),
    ASTpct: $('#SF-row').attr('ASTpct'),
    STLpct: $('#SF-row').attr('STLpct'),
    BLKpct: $('#SF-row').attr('BLKpct'),
    TOVpct: $('#SF-row').attr('TOVpct'),
    USGpct: $('#SF-row').attr('USGpct')
  };

  var pf = {
    position: $('#PF-row').attr('position'),
    name: $('#PF-row').attr('name'),
    TSpct: $('#PF-row').attr('TSpct'),
    ThreePAr: $('#PF-row').attr('ThreePAr'),
    ThreePCT: $('#PF-row').attr('ThreePCT'),
    FTr: $('#PF-row').attr('FTr'),
    FTpct: $('#PF-row').attr('FTpct'),
    ORBpct: $('#PF-row').attr('ORBpct'),
    DRBpct: $('#PF-row').attr('DRBpct'),
    ASTpct: $('#PF-row').attr('ASTpct'),
    STLpct: $('#PF-row').attr('STLpct'),
    BLKpct: $('#PF-row').attr('BLKpct'),
    TOVpct: $('#PF-row').attr('TOVpct'),
    USGpct: $('#PF-row').attr('USGpct')
  };

  var c = {
    position: $('#C-row').attr('position'),
    name: $('#C-row').attr('name'),
    TSpct: $('#C-row').attr('TSpct'),
    ThreePAr: $('#C-row').attr('ThreePAr'),
    ThreePCT: $('#C-row').attr('ThreePCT'),
    FTr: $('#C-row').attr('FTr'),
    FTpct: $('#C-row').attr('FTpct'),
    ORBpct: $('#C-row').attr('ORBpct'),
    DRBpct: $('#C-row').attr('DRBpct'),
    ASTpct: $('#C-row').attr('ASTpct'),
    STLpct: $('#C-row').attr('STLpct'),
    BLKpct: $('#C-row').attr('BLKpct'),
    TOVpct: $('#C-row').attr('TOVpct'),
    USGpct: $('#C-row').attr('USGpct')
  };

  var roster = {
    // logo: logo,
    // teamName: teamName,
    pg: pg,
    sg: sg,
    sf: sf,
    pf: pf,
    c: c,

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



