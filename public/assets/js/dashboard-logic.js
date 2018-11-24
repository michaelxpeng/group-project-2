$(document).ready(function () {
    $.get('/api/credentials', function (response) {
        var config = {
            apiKey: response.apiKey,
            authDomain: response.authDomain,
            databaseURL: response.databaseURL,
            projectId: response.projectId,
            storageBucket: response.storageBucket,
            messagingSenderId: response.messagingSenderId
        };

        firebase.initializeApp(config);
        var dataRef = firebase.database();
        // console.log(dataRef);
        var ref = dataRef.ref();
        // ref.on('value', gotData, errData);

        

    //    ref.orderByChild("userID").equalTo(sessionStorage.getItem("uid")).on("child_added", function(snapshot) {
    //         var sv = snapshot.val();
    //       console.log(sv);
    //       });


        // ref.on("child_added", function (snapshot, prevChildKey) {
            ref.orderByChild("userID").equalTo(sessionStorage.getItem("uid")).on("child_added", function(snapshot, prevChildKey) {

            var team = snapshot.val();
            // console.log(snapshot);
           

            var teamDiv = $('<div>').addClass('saved-team');
            if (team.selected === true) {
                teamDiv.addClass('selected-team')
            }
            var teamWbuttons = $('<div>').addClass('team');

            var teamName = $('<h4>').text(team.name).addClass('team-heading');

            var teamTable = $('<table>').attr('class', 'user-lineup');
            var headingRow = $('<tr>').html('<th>Position</th><th>Name</th><th>Year</th><th>Salary</th>');
            var rowPG = $('<tr>').addClass('PG-row').html("<td>PG</td><td>" + team.pg.name + "</td><td>" + team.pg.year + "</td><td>$" + team.pg.salary + "</td>");
            var rowSG = $('<tr>').addClass('SG-row').html("<td>SG</td><td>" + team.sg.name + "</td><td>" + team.sg.year + "</td><td>$" + team.sg.salary + "</td>");
            var rowSF = $('<tr>').addClass('SF-row').html("<td>SF</td><td>" + team.sf.name + "</td><td>" + team.sf.year + "</td><td>$" + team.sf.salary + "</td>");
            var rowPF = $('<tr>').addClass('PF-row').html("<td>PF</td><td>" + team.pf.name + "</td><td>" + team.pf.year + "</td><td>$" + team.pf.salary + "</td>");
            var rowC = $('<tr>').addClass('C-row').html("<td>C</td><td>" + team.c.name + "</td><td>" + team.c.year + "</td><td>$" + team.c.salary + "</td>");
            teamTable.append(headingRow, rowPG, rowSG, rowSF, rowPF, rowC)

            var actionButtonsDiv = $('<div>').addClass('actions-div')
            var selectButton = $('<button>').addClass('action-button').addClass('action-select').val(snapshot.key).text('SELECT');
            var dropButton = $('<button>').addClass('action-button').addClass('action-drop').val(snapshot.key).text('DROP');
            actionButtonsDiv.append(selectButton, dropButton)

            teamDiv.append(teamTable)

            teamWbuttons.append(teamName, teamDiv, actionButtonsDiv)

            $('#user-lineups').append(teamWbuttons);

            
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
                childKey = $(this).val();
                ref.once("value", function (snapshot) {
                    console.log(childKey);
                    snapshot.forEach(function (child) {
                        child.ref.update({
                            selected: false
                        });
                    });
                    ref.child(childKey).update({
                        selected: true
                    });
                    $('#play-game').fadeIn();
                });

               
                $('.selected-team').removeClass('selected-team');
                $(this).parent('div').parent('div').find('.saved-team').addClass('selected-team')
                // ref.child(childKey).update({
                //     selected: true
                // });
            })
        });
    });

});

$('#new-team').on('click', function () {
    location.href = "/selection";
});

$('#play-game').on('click', function () {
    location.href = "/game";
});

console.log(sessionStorage.getItem("displayName"));
console.log(sessionStorage.getItem("email"));
console.log(sessionStorage.getItem("uid"));