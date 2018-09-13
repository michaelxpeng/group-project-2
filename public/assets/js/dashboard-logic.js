
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
    // ref.on('value', gotData, errData);


    ref.on("child_added", function(snapshot, prevChildKey) {
        var team = snapshot.val();
        // console.log(snapshot.key);

        var teamDiv = $('<div>').addClass('saved-team');
        var teamWbuttons = $('<div>').addClass('team');

        var teamName = $('<h4>').text(team.name).addClass('team-heading');

        var teamTable = $('<table>').attr('class', 'user-lineup');
        var headingRow = $('<tr>').html('<th>Position</th><th>Name</th><th>Year</th><th>Salary</th>');
        var rowPG = $('<tr>').addClass('PG-row').html("<td>PG</td><td>"+team.pg.name+"</td><td>"+team.pg.year+"</td><td>$"+team.pg.salary+"</td>");
        var rowSG = $('<tr>').addClass('SG-row').html("<td>SG</td><td>"+team.sg.name+"</td><td>"+team.sg.year+"</td><td>$"+team.sg.salary+"</td>");
        var rowSF = $('<tr>').addClass('SF-row').html("<td>SF</td><td>"+team.sf.name+"</td><td>"+team.sf.year+"</td><td>$"+team.sf.salary+"</td>");
        var rowPF = $('<tr>').addClass('PF-row').html("<td>PF</td><td>"+team.pf.name+"</td><td>"+team.pf.year+"</td><td>$"+team.pf.salary+"</td>");
        var rowC = $('<tr>').addClass('C-row').html("<td>C</td><td>"+team.c.name+"</td><td>"+team.c.year+"</td><td>$"+team.c.salary+"</td>");
        teamTable.append(headingRow, rowPG, rowSG, rowSF, rowPF, rowC)

        var actionButtonsDiv = $('<div>').addClass('actions-div')
        var selectButton = $('<button>').addClass('action-button').addClass('action-select').val(snapshot.key).text('SELECT');
        var dropButton = $('<button>').addClass('action-button').addClass('action-drop').val(snapshot.key).text('DROP');
        actionButtonsDiv.append(selectButton, dropButton)
        
        teamDiv.append(teamTable)

        teamWbuttons.append(teamName, teamDiv, actionButtonsDiv)

        $('#user-lineups').append(teamWbuttons);

        if(team.selected === true){
            teamDiv.addClass('selected-team');
            teamName.addClass('selected-team-heading');
            selectButton.addClass('hidden')
        }
        // console.log("position C name: " + team.c.name);
        // console.log(prevChildKey)
        // console.log("Title: " + newPost.title);
        // console.log("Previous Post ID: " + prevChildKey);

        $('.action-drop').on('click', function () {
            childKey = $(this).val();
            ref.child(childKey).remove();
            $(this).parent('div').parent('div').remove();
        });
        $('.action-select').on('click', function () {
            
            ref.once("value", function(snapshot) {
                snapshot.forEach(function(child) {
                    child.ref.update({
                    selected: false
                    });
                });
            });

            childKey = $(this).val();
            $('.selected-team').removeClass('selected-team');
            $('.team-heading').removeClass('selected-team-heading');
            $('.action-select').removeClass('hidden');
            $(this).parent('div').parent('div').find('.saved-team').addClass('selected-team');
            $(this).parent('div').parent('div').find('.team-heading').addClass('selected-team-heading');
            $(this).parent('div').find('.action-select').addClass('hidden');
            ref.child(childKey).update({
                selected:true
            });

            
        })
      });

    // function gotData(data) {
    //     var team = data.val();
    //     var keys = Object.keys(team);
    //     // keys will equal to each user team name?
    //     // console.log(keys);

    //     for (var i = 0; i < keys.length; i++) {
    //         var k = keys[i];
    //         var player0 = team[k].pg;
    //         // console.log(player0);
    //         var player1 = team[k].sg;
    //         // console.log(player1);
    //         var player2 = team[k].sf;
    //         // console.log(player2);
    //         var player3 = team[k].pf;
    //         // console.log(player3);
    //         var player4 = team[k].c;
    //         // console.log(player4);

    //     };

    //     userPlayers.push(player0);
    //     userPlayers.push(player1);
    //     userPlayers.push(player2);
    //     userPlayers.push(player3);
    //     userPlayers.push(player4);

    // }
    // function errData(err) {
    //     console.log("Error");
    //     console.log(err);
    // }

    
});

// var userPlayers = [];

// //timeout gives us time for the async firebase pull
// setTimeout(function () {
//     // console.log(userPlayers);
//     // console.log(userPlayers[0]);
//     this.player0 = userPlayers[0];
//     this.player1 = userPlayers[1];
//     this.player2 = userPlayers[2];
//     this.player3 = userPlayers[3];
//     this.player4 = userPlayers[4];

//     // console.log(player0);
//     console.log(userPlayers[4]);
//     // console.log(userPlayers[0].name);

//     // $('#user-lineup').append(
//         $("#PG-row").html(
//             $('<td>').replaceWith(userPlayers[0].position),
//             $('<td>').replaceWith(userPlayers[0].name),
//             // $('<td>').text("$" + userPlayers[0].salary)
//         );
// }, 2000)

// $('.action-drop').on('click', function () {
//     $(this).parent('div').parent('div').remove();
// })

// $('.action-select').on('click', function () {
//     $('.selected-team').removeClass('selected-team');
//     $(this).parent('div').parent('div').find('.saved-team').addClass('selected-team')
// })

$('#new-team').on('click', function () {
    location.href = "/selection";
});

$('#play-game').on('click', function () {
    location.href = "/game";
});