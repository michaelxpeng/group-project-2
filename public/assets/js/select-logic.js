$.get("/api/stats", function(response){
    console.log(response[0])
    for(var i = 0; i < response.length; i++){
        if(response[i].gamesPlayed > 58){
            var posSelect = $('<select>');
            if(response[i].position === "C"){
                posSelect.append("<option value='C'>C</option>")
            }else if(response[i].position === "F-C" || response[i].position === "C-F"){
                posSelect.append(
                    "<option value='C'>C</option>"+
                    "<option value='PF'>PF</option>"
                )
            }else if(response[i].position === "F"){
                posSelect.append(
                    "<option value='SF'>SF</option>"+
                    "<option value='PF'>PF</option>"
                )
            }else if(response[i].position === "G-F" || response[i].position === "F-G"){
                posSelect.append(
                    "<option value='PF'>PF</option>"+
                    "<option value='SF'>SF</option>"+
                    "<option value='SG'>SG</option>"
                )
            }else if(response[i].position === "G"){
                posSelect.append(
                    "<option value='PG'>PG</option>"+
                    "<option value='SG'>SG</option>"+
                    "<option value='SF'>SF</option>"
                )
            }
            // playerCount++;
            // var position = positionArray[Math.floor(Math.random()*5)];
            var salary = parseInt(((parseFloat(response[i].per)+parseFloat(response[i].usgPCT))/2)*100)
            var statsDiv = $('<div class="hidden stat-display" id="stats'+i+'">');
            statsDiv.html(
                "Name: "+response[i].playerName+
                "<br>Year: "+response[i].year+
                "<br>Position: "+response[i].position+
                "<br>Salary: $"+parseInt(salary)+
                "<br>Points: "+ (parseInt(response[i].pts)/response[i].gamesPlayed).toFixed(2)+
                "<br>Rebounds: "+ (parseInt(response[i].reb)/response[i].gamesPlayed).toFixed(2)+
                "<br>Assists: "+ (parseInt(response[i].ast)/response[i].gamesPlayed).toFixed(2)+
                "<br>Steals: "+ (parseInt(response[i].stl)/response[i].gamesPlayed).toFixed(2)+
                "<br>Blocks: "+ (parseInt(response[i].blk)/response[i].gamesPlayed).toFixed(2)
            );
            $('#stat-holder').append(statsDiv);
            $('#available-players').append(
                
                $("<tr>").append(
                    $('<td>').text(response[i].position),
                    $('<td>').text(response[i].playerName),
                    $('<td>').text("$"+parseInt(salary)),
                    $('<td>').html(posSelect),
                    $('<td>').html('<button class="add-player" value="'+response[i].playerName+salary+'">ADD</button>'),
                    // statsDiv
                ).val(response[i].position).attr('name' , response[i].playerName).attr('data', i).attr('salary' , salary).addClass('available-player-row')
                .hover(
                    function (){
                        var rowRefNumb = $(this).attr('data');
                        $('#stats'+rowRefNumb).removeClass('hidden').fadeIn()
                    } ,
                    function (){
                        var rowRefNumb = $(this).attr('data');
                        $('#stats'+rowRefNumb).addClass('hidden')
                    }
                )
            )
        }
    }
        // add player button
    $('.add-player').on('click' , function(){
        var buttonValue = $(this).val();
        if(buttonValue === $('#C-row').attr("validCheck") || buttonValue === $('#PG-row').attr("validCheck") || buttonValue === $('#SG-row').attr("validCheck") || buttonValue === $('#PF-row').attr("validCheck") || buttonValue === $('#SF-row').attr("validCheck")){
            alert("no duplicates!!!");
        }else{
            var selPlayerPos = $(this).parents('tr').find('select').val();
            var selPlayerSal = $(this).parents('tr').attr('salary');
            console.log(selPlayerSal)
            var selPlayerName = $(this).parents('tr').attr('name');
            if(selPlayerPos === 'C'){
                $('#C-row').attr("validCheck", selPlayerName+selPlayerSal).html('').append(
                    $('<td>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal)
                )
            }else if(selPlayerPos === 'PG'){
                $('#PG-row').attr("validCheck", selPlayerName+selPlayerSal).html('').append(
                    $('<td>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal)
                )
            }else if(selPlayerPos === 'SG'){
                $('#SG-row').attr("validCheck", selPlayerName+selPlayerSal).html('').append(
                    $('<td>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal)
                )
            }else if(selPlayerPos === 'PF'){
                $('#PF-row').attr("validCheck", selPlayerName+selPlayerSal).html('').append(
                    $('<td>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal)
                )
            }else if(selPlayerPos === 'SF'){
                $('#SF-row').attr("validCheck", selPlayerName+selPlayerSal).html('').append(
                    $('<td>').text(selPlayerPos),
                    $('<td>').text(selPlayerName),
                    $('<td>').text(selPlayerSal)
                )
            }
        }
    })
})

// var positionArray = ['PG', 'SG', 'SF', 'PF', 'C']
// // fill table with data
// for(var i = 1; i < 100; i++){
//     var position = positionArray[Math.floor(Math.random()*5)];
//     var statsDiv = $('<div class="hidden stat-display" id="stats'+i+'">').html('<p>tst'+i+'</p>');
//     statsDiv.html("Position: " + position + "<br>Name: player"+i+"<br>Salary:"+1000+i)
//     $('#stat-holder').append(statsDiv);
//     $('#available-players').append(
        
//         $("<tr>").append(
//             $('<td>').text(position),
//             $('<td>').text("player"+i),
//             $('<td>').text(1000+i),
//             $('<td>').html('<button class="add-player">ADD</button>'),
//             // statsDiv
//         ).val(position).attr('name' , "george"+i).attr('data', i).attr('salary' , 1000+i).addClass('available-player-row')
//         .hover(
//             function (){
//                 var rowRefNumb = $(this).attr('data');
//                 $('#stats'+rowRefNumb).removeClass('hidden').fadeIn()
//             } ,
//             function (){
//                 var rowRefNumb = $(this).attr('data');
//                 $('#stats'+rowRefNumb).addClass('hidden')
//             }
//         )
//     )
// }







// $(".tab").on('click', function(){
//     var tabValue = $(this).val();
//     if(tabValue === 'ALL'){
//         $('.available-player-row').removeClass('hidden')
//         $(".tab").removeClass('active');
//         $(this).addClass('active');
//     }else{
//         $('.available-player-row').removeClass('hidden')
//         $(".tab").removeClass('active');
//         $(this).addClass('active');
//         console.log(tabValue)
//         $('.available-player-row').filter(function(index){
//             if($(this).val() != tabValue){
//                 return index
//             }
//         }).addClass('hidden')
//     }

    
//     // $('.available-player-row').addClass('hidden')
//     // if($('.available-player-row').val() != tabValue){
//     //     $('.available-player-row').addClass('hidden')
//     // }
// })

$(".tab").on('click', function(){
    var tabValue = $(this).val();
    if(tabValue === 'all'){
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
    }else if(tabValue === 'guards'){
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function(index){
            if($(this).val() != 'G'){
                return index
            }
        }).addClass('hidden')
    }else if(tabValue === 'wings'){
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function(index){
            if(($(this).val() != 'G-F') && ($(this).val() != 'F-G') && ($(this).val() != 'F')){
                return index
            }
        }).addClass('hidden')
    }else if(tabValue === 'bigs'){
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        $('.available-player-row').filter(function(index){
            if(($(this).val() != 'C-F') && ($(this).val() != 'F-C') && ($(this).val() != 'C')){
                return index
            }
        }).addClass('hidden')
    }
})

$('#save-team').on('click', function(){
    $.post()
})
