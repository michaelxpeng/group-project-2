
$(document).ready(function () {
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
    // console.log(dataRef);
    var ref = dataRef.ref();
    ref.on('value', gotData, errData);

    function gotData(data) {
        var team = data.val();
        var keys = Object.keys(team);
        // keys will equal to each user team name?
        // console.log(keys);

        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var player0 = team[k].pg;
            // console.log(player0);
            var player1 = team[k].sg;
            // console.log(player1);
            var player2 = team[k].sf;
            // console.log(player2);
            var player3 = team[k].pf;
            // console.log(player3);
            var player4 = team[k].c;
            // console.log(player4);

        };

        userPlayers.push(player0);
        userPlayers.push(player1);
        userPlayers.push(player2);
        userPlayers.push(player3);
        userPlayers.push(player4);

    }
    function errData(err) {
        console.log("Error");
        console.log(err);
    }
});

var userPlayers = [];

//timeout gives us time for the async firebase pull
setTimeout(function () {
    // console.log(userPlayers);
    // console.log(userPlayers[0]);
    this.player0 = userPlayers[0];
    this.player1 = userPlayers[1];
    this.player2 = userPlayers[2];
    this.player3 = userPlayers[3];
    this.player4 = userPlayers[4];

    // console.log(player0);
    console.log(userPlayers[0]);
    // console.log(userPlayers[0].name);

    // $('#user-lineup').append(
        $("#PG-row").html(
            $('<td>').replaceWith(userPlayers[0].position),
            $('<td>').replaceWith(userPlayers[0].name),
            // $('<td>').text("$" + userPlayers[0].salary)
        );
}, 2000)

$('.action-drop').on('click', function () {
    $(this).parent('div').parent('div').remove();
})

$('.action-select').on('click', function () {
    $('.selected-team').removeClass('selected-team');
    $(this).parent('div').parent('div').find('.saved-team').addClass('selected-team')
})

$('#new-team').on('click', function () {
    location.href = "/selection";
});

$('#play-game').on('click', function () {
    location.href = "/game";
});