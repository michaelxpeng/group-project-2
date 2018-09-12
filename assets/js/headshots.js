$(document).ready (function () {
var firstName = "lebron";
var lastName = "james";
    var queryURL = "https://nba-players.herokuapp.com/players/" + lastName + "/" + firstName;

    $.ajax({
        url: queryURL,
        method: "GET"
        
      }).then(function (response) {
          console.log(response);
      });

});