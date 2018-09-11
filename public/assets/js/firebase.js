// {/* <script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script> */}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4TzoxRV5oRyYlHqT6lvmxIJxBHPYp4co",
  authDomain: "fantasy-draft-1f6a6.firebaseapp.com",
  databaseURL: "https://fantasy-draft-1f6a6.firebaseio.com",
  projectId: "fantasy-draft-1f6a6",
  storageBucket: "fantasy-draft-1f6a6.appspot.com",
  messagingSenderId: "271694339648"
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

  var pg = $('#pg').val();
  console.log(pg);

  var sg = $('#sg').val();
  console.log(sg);

  var sf = $('#sf').val();
  console.log(sf);

  var pf = $('#pf').val();
  console.log(pf);

  var c = $('#c').val();
  console.log(c);

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



