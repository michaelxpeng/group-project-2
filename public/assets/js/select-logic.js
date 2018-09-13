var userSalary = 12000;
var playerCount = 0;

$('#salary-display').text(userSalary);
$('#year-select').change(function(){
    $('#search-div-id').removeClass('hidden').addClass('search-div');
    var year = $(this).val();
    $.get("/api/players" + year, function (response) {
        $('#select-instructions').text("Hover Cursor Over Player's Name to See Stats");
        $('#stat-holder').find("div").remove();
        $('#available-players').find('tbody').empty();
        for (var i = 0; i < response.length; i++) {
            var ThreePCT = (response[i].threePM / response[i].threePA).toFixed(3);
            var FTpct = (response[i].ftm / response[i].fta).toFixed(3);
            if (response[i].gamesPlayed > 58) {
                var posSelect = $('<select class="position-selector">');
                if (response[i].position === "C") {
                    posSelect.append("<option value='C'>C</option>")
                } else if (response[i].position === "F-C" || response[i].position === "C-F") {
                    posSelect.append(
                        "<option value='C'>C</option>" +
                        "<option value='PF'>PF</option>"
                    )
                } else if (response[i].position === "F") {
                    posSelect.append(
                        "<option value='SF'>SF</option>" +
                        "<option value='PF'>PF</option>"
                    )
                } else if (response[i].position === "G-F" || response[i].position === "F-G") {
                    posSelect.append(
                        "<option value='PF'>PF</option>" +
                        "<option value='SF'>SF</option>" +
                        "<option value='SG'>SG</option>"
                    )
                } else if (response[i].position === "G") {
                    posSelect.append(
                        "<option value='PG'>PG</option>" +
                        "<option value='SG'>SG</option>" +
                        "<option value='SF'>SF</option>"
                    )
                }

                var salary = response[i].salary;
                var statsDiv = $('<div class="hidden stat-display" id="stats' + i + '">');
                statsDiv.html(
                    "<h3 class='stat-div-heading'>"+response[i].playerName+"</h3>"+
                    "<h4>"+response[i].year+"</h4>"+
                    "<h3>Per Game Averages:</h3>"+
                    "<h4>Points: "+ parseFloat(response[i].ppg) +"</h4>"+
                    "<h4>Rebounds: "+ parseFloat(response[i].rpg) +"</h4>"+
                    "<h4>Assists: "+ parseFloat(response[i].apg) +"</h4>"+
                    "<h4>Steals: "+ (parseInt(response[i].stl)/response[i].gamesPlayed).toFixed(1)+"</h4>"+
                    "<h4>Blocks: "+ (parseInt(response[i].blk)/response[i].gamesPlayed).toFixed(1)+"</h4>"
                );
                $('#stat-holder').append(statsDiv);

                $('#available-players').append(
                    $("<tr>").append(
                        $('<td>').text(response[i].position),
                        $('<td>').text(response[i].playerName),
                        $('<td>').text("$" + salary),
                        $('<td>').html(posSelect),
                        $('<td>').html('<button class="add-player" value="'+response[i].playerName+salary+'">+</button>'),
                        // statsDiv
                    ).val(response[i].position).attr('data', i).attr('salary' , salary)
                    .attr('name' , response[i].playerName)
                    .attr('year' , response[i].year)
                    .attr('TSpct' , response[i].tsPCT)
                    .attr('ThreePAr' , response[i].threePAR)
                    .attr('ThreePCT' , ThreePCT)
                    .attr('FTr' , response[i].ftR)
                    .attr('FTpct' , FTpct)
                    .attr('ORBpct' , response[i].orbPCT)
                    .attr('DRBpct' , response[i].drbPCT)
                    .attr('TRBpct' , response[i].trbPCT)
                    .attr('ASTpct' , response[i].astPCT)
                    .attr('STLpct' , response[i].stlPCT)
                    .attr('BLKpct' , response[i].blkPCT)
                    .attr('TOVpct' , response[i].tovPCT)
                    .attr('USGpct' , response[i].usgPCT)
                    .addClass('available-player-row')
                    .hover(
                        function (){
                            var rowRefNumb = $(this).attr('data');
                            $('#select-instructions').addClass('hidden');
                            $('#stats'+rowRefNumb).removeClass('hidden')
                        } ,
                        function (){
                            var rowRefNumb = $(this).attr('data');
                            $('#stats'+rowRefNumb).addClass('hidden');
                            $('#select-instructions').removeClass('hidden');
                        }
                    )
                )
            }
        }

        // add player button
        $('.add-player').on('click', function () {
            var playerSalaryCheck = parseInt($(this).parents('tr').attr('salary'))
            var buttonValue = $(this).val();
            if (buttonValue === $('#C-row').attr("validCheck") || buttonValue === $('#PG-row').attr("validCheck") || buttonValue === $('#SG-row').attr("validCheck") || buttonValue === $('#PF-row').attr("validCheck") || buttonValue === $('#SF-row').attr("validCheck")) {
                alert("cannot use same player twice");
            } else if ((userSalary - playerSalaryCheck) < 0) {
                alert("cannot afford this player with current salary")
            } else {
                userSalary -= playerSalaryCheck;
                $('#salary-display').text(userSalary);

                var selPlayerPos = $(this).parents('tr').find('select').val();
                var selPlayerSal = $(this).parents('tr').attr('salary');
                var selPlayerName = $(this).parents('tr').attr('name');
                var playerYear = $(this).parents('tr').attr('year');
                var TSpct = $(this).parents('tr').attr('TSpct')
                var ThreePAr = $(this).parents('tr').attr('ThreePAr')
                var ThreePCT = $(this).parents('tr').attr('ThreePCT')
                var FTr = $(this).parents('tr').attr('FTr')
                var FTpct = $(this).parents('tr').attr('FTpct')
                var ORBpct = $(this).parents('tr').attr('ORBpct')
                var DRBpct = $(this).parents('tr').attr('DRBpct')
                var TRBpct = $(this).parents('tr').attr('TRBpct')
                var ASTpct = $(this).parents('tr').attr('ASTpct')
                var STLpct = $(this).parents('tr').attr('STLpct')
                var BLKpct = $(this).parents('tr').attr('BLKpct')
                var TOVpct = $(this).parents('tr').attr('TOVpct')
                var USGpct = $(this).parents('tr').attr('USGpct')

                var rowFunctionality = function (row) {
                    if (($(row).attr("validCheck")) != "") {
                        userSalary += parseInt($(row).attr("salary"))
                        $('#salary-display').text(userSalary);
                    }
                    $(row).attr("validCheck", selPlayerName + selPlayerSal).html('').append(
                        $('<th>').text(selPlayerPos),
                        $('<td>').text(selPlayerName),
                        $('<td>').text(playerYear),
                        $('<td>').text("$" + selPlayerSal),
                        $('<td>').html("<td><button class='drop-player'>--</button></td>")
                    ).attr('salary' , selPlayerSal)
                    .attr('name' , selPlayerName)
                    .attr('year' , playerYear)
                    .attr('TSpct' , TSpct)
                    .attr('ThreePAr' , ThreePAr)
                    .attr('ThreePCT' , ThreePCT)
                    .attr('FTr' , FTr)
                    .attr('FTpct' , FTpct)
                    .attr('ORBpct' , ORBpct)
                    .attr('DRBpct' , DRBpct)
                    .attr('TRBpct' , TRBpct)
                    .attr('ASTpct' , ASTpct)
                    .attr('STLpct' , STLpct)
                    .attr('BLKpct' , BLKpct)
                    .attr('TOVpct' , TOVpct)
                    .attr('USGpct' , USGpct)
                    .find("button").on('click' , function(){
                        var rowSalary = parseInt($(this).parents('tr').attr("salary"))
                        userSalary += rowSalary;
                        $('#salary-display').text(userSalary);
                        $(this).parents('tr')
                        .attr("salary", "")
                        .attr("validCheck", '')
                        .attr('name' , '')
                        .attr('year' , '')
                        .attr('TSpct' , '')
                        .attr('ThreePAr' , '')
                        .attr('ThreePCT' , '')
                        .attr('FTr' , '')
                        .attr('FTpct' , '')
                        .attr('ORBpct' , '')
                        .attr('DRBpct' , '')
                        .attr('TRBpct' , '')
                        .attr('ASTpct' , '')
                        .attr('STLpct' , '')
                        .attr('BLKpct' , '')
                        .attr('TOVpct' , '')
                        .attr('USGpct' , '')
                        .find("td").empty();
                    })
                }

                if (selPlayerPos === 'C') {
                    rowFunctionality('#C-row')
                } else if (selPlayerPos === 'PG') {
                    rowFunctionality('#PG-row')
                } else if (selPlayerPos === 'SG') {
                    rowFunctionality('#SG-row')
                } else if (selPlayerPos === 'PF') {
                    rowFunctionality('#PF-row')
                } else if (selPlayerPos === 'SF') {
                    rowFunctionality('#SF-row')
                }
            }
        });
    })

})

$(".search-player").on("click", function () {
    $('.available-player-row').removeClass('hidden')
    $(".tab").removeClass('active');
    var userSearch = ($(".search").val().trim()).toLowerCase()
    
    $('.available-player-row').filter(function () {

        var rowName = $(this).attr('name').toLowerCase();
        var rowNameArray = rowName.split(' ');

        if(rowName != userSearch && userSearch != rowNameArray[0] && userSearch != rowNameArray[1] && userSearch != rowNameArray[2]){
            return true
        }
        return false;
        
    }).addClass('hidden')
})

$(".tab").on('click', function () {
    var tabValue = $(this).val();
    if (tabValue === 'all') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
    } else if (tabValue === 'guards') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if ($(this).val() != 'G') {
                return true;
            }
            return false;
        }).addClass('hidden')
    } else if (tabValue === 'wings') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if (($(this).val() != 'G-F') && ($(this).val() != 'F-G') && ($(this).val() != 'F')) {
                return true;
            }
            return false;
        }).addClass('hidden')
    } else if (tabValue === 'bigs') {
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function (index) {
            if (($(this).val() != 'C-F') && ($(this).val() != 'F-C') && ($(this).val() != 'C')) {
                return true;
            }
            return false;
        }).addClass('hidden')
    }
});



// $('#save-team').on('click', function(){

//     function checkURL(url) {
//         return(url.match(/\.(jpeg|jpg|gif|png)$/) != null);
//     }

//     var teamName = $('#team-name-input').val();
//     var teamTag = $('#team-tag-input').val();
//     var teamImageURL = $('#team-image-input').val();

//     if($('#PG-row').attr('name') === "" || $('#SG-row').attr('name') === "" || $('#PF-row').attr('name') === "" || $('#SF-row').attr('name') === "" || $('#C-row').attr('name') === "" || $('#PG-row').attr('name') === undefined || $('#SG-row').attr('name') === undefined || $('#PF-row').attr('name') === undefined || $('#SF-row').attr('name') === undefined || $('#C-row').attr('name') === undefined){
//         alert("All Positions Need to Be Filled")
//     }else if(teamName === ""){
//         alert('Please Input a Team Name')
//     }else if(teamTag === ""){
//         alert('Please Input a Team Tag')
//     }else if(teamTag.length > 4){
//         alert('Team Tag Must Be Between 1 and 4 Characters')
//     }else if(teamImageURL != ""){
//         if(checkURL(teamImageURL)){}
//         else{
//             alert('If Using a Team Image, Please Enter a Valid URL')
//         }
//     }else{
//         var pg = {
//             position: $('#PG-row').attr('position'),
//             name: $('#PG-row').attr('name'),
//             TSpct: $('#PG-row').attr('TSpct'),
//             ThreePAr: $('#PG-row').attr('ThreePAr'),
//             ThreePct: $('#PG-row').attr('ThreePCT'),
//             FTr: $('#PG-row').attr('FTr'),
//             FTpct: $('#PG-row').attr('FTpct'),
//             ORBpct: $('#PG-row').attr('ORBpct'),
//             DRBpct: $('#PG-row').attr('DRBpct'),
//             TRBpct: $('#PG-row').attr('TRBpct'),
//             ASTpct: $('#PG-row').attr('ASTpct'),
//             STLpct: $('#PG-row').attr('STLpct'),
//             BLKpct: $('#PG-row').attr('BLKpct'),
//             TOVpct: $('#PG-row').attr('TOVpct'),
//             USGpct: $('#PG-row').attr('USGpct'),
//             salary: $('#PG-row').attr('salary')
//         };

//         var sg = {
//             position: $('#SG-row').attr('position'),
//             name: $('#SG-row').attr('name'),
//             TSpct: $('#SG-row').attr('TSpct'),
//             ThreePAr: $('#SG-row').attr('ThreePAr'),
//             ThreePct: $('#SG-row').attr('ThreePCT'),
//             FTr: $('#SG-row').attr('FTr'),
//             FTpct: $('#SG-row').attr('FTpct'),
//             ORBpct: $('#SG-row').attr('ORBpct'),
//             DRBpct: $('#SG-row').attr('DRBpct'),
//             TRBpct: $('#SG-row').attr('TRBpct'),
//             ASTpct: $('#SG-row').attr('ASTpct'),
//             STLpct: $('#SG-row').attr('STLpct'),
//             BLKpct: $('#SG-row').attr('BLKpct'),
//             TOVpct: $('#SG-row').attr('TOVpct'),
//             USGpct: $('#SG-row').attr('USGpct'),
//             salary: $('#SG-row').attr('salary')
//         };

//         var sf = {
//             position: $('#SF-row').attr('position'),
//             name: $('#SF-row').attr('name'),
//             TSpct: $('#SF-row').attr('TSpct'),
//             ThreePAr: $('#SF-row').attr('ThreePAr'),
//             ThreePct: $('#SF-row').attr('ThreePCT'),
//             FTr: $('#SF-row').attr('FTr'),
//             FTpct: $('#SF-row').attr('FTpct'),
//             ORBpct: $('#SF-row').attr('ORBpct'),
//             DRBpct: $('#SF-row').attr('DRBpct'),
//             TRBpct: $('#SF-row').attr('TRBpct'),
//             ASTpct: $('#SF-row').attr('ASTpct'),
//             STLpct: $('#SF-row').attr('STLpct'),
//             BLKpct: $('#SF-row').attr('BLKpct'),
//             TOVpct: $('#SF-row').attr('TOVpct'),
//             USGpct: $('#SF-row').attr('USGpct'),
//             salary: $('#SF-row').attr('salary')
//         };

//         var pf = {
//             position: $('#PF-row').attr('position'),
//             name: $('#PF-row').attr('name'),
//             TSpct: $('#PF-row').attr('TSpct'),
//             ThreePAr: $('#PF-row').attr('ThreePAr'),
//             ThreePct: $('#PF-row').attr('ThreePCT'),
//             FTr: $('#PF-row').attr('FTr'),
//             FTpct: $('#PF-row').attr('FTpct'),
//             ORBpct: $('#PF-row').attr('ORBpct'),
//             DRBpct: $('#PF-row').attr('DRBpct'),
//             TRBpct: $('#PF-row').attr('TRBpct'),
//             ASTpct: $('#PF-row').attr('ASTpct'),
//             STLpct: $('#PF-row').attr('STLpct'),
//             BLKpct: $('#PF-row').attr('BLKpct'),
//             TOVpct: $('#PF-row').attr('TOVpct'),
//             USGpct: $('#PF-row').attr('USGpct'),
//             salary: $('#PF-row').attr('salary')
//         };

//         var c = {
//             position: $('#C-row').attr('position'),
//             name: $('#C-row').attr('name'),
//             TSpct: $('#C-row').attr('TSpct'),
//             ThreePAr: $('#C-row').attr('ThreePAr'),
//             ThreePct: $('#C-row').attr('ThreePCT'),
//             FTr: $('#C-row').attr('FTr'),
//             FTpct: $('#C-row').attr('FTpct'),
//             ORBpct: $('#C-row').attr('ORBpct'),
//             DRBpct: $('#C-row').attr('DRBpct'),
//             TRBpct: $('#C-row').attr('TRBpct'),
//             ASTpct: $('#C-row').attr('ASTpct'),
//             STLpct: $('#C-row').attr('STLpct'),
//             BLKpct: $('#C-row').attr('BLKpct'),
//             TOVpct: $('#C-row').attr('TOVpct'),
//             USGpct: $('#C-row').attr('USGpct'),
//             salary: $('#C-row').attr('salary')
//         };

//         console.log(pg);
//         console.log(sg);
//         console.log(sf);
//         console.log(pf);
//         console.log(c);

//         // location.href = "/dashboard";
//     };

// });