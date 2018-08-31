var positionArray = ['PG', 'SG', 'SF', 'PF', 'C']
// fill table with data
for(var i = 1; i < 100; i++){
    var position = positionArray[Math.floor(Math.random()*5)];
    var statsDiv = $('<div class="hidden" id="stats'+i+'">').html('<p>tst'+i+'</p>')
    $('#available-players').append(
        
        $("<tr>").append(
            $('<td>').text(position),
            $('<td>').text("player"+i),
            $('<td>').text(1000+i),
            $('<td>').html('<button class="add-player">ADD</button>'),
            statsDiv
        ).val(position).attr('name' , "george"+i).attr('salary' , 1000+i).addClass('available-player-row')
        .hover(
            function (){
                $(this).find("div").removeClass('hidden')
            } ,
            function (){
                $(this).find("div").addClass('hidden')
            }
        )
    )
}


    





// add player button
$('.add-player').on('click' , function(){
    var selPlayerPos = $(this).parents('tr').val();
    var selPlayerSal = $(this).parents('tr').attr('salary')
    var selPlayerName = $(this).parents('tr').attr('name')
    // $(this).parents('tr').css("background-color", "red")
    if(selPlayerPos === 'C'){
        $('#C-row').html('').append(
            $('<td>').text(selPlayerPos),
            $('<td>').text(selPlayerName),
            $('<td>').text(selPlayerSal)
        )
    }else if(selPlayerPos === 'PG'){
        $('#PG-row').html('').append(
            $('<td>').text(selPlayerPos),
            $('<td>').text(selPlayerName),
            $('<td>').text(selPlayerSal)
        ) 
    }else if(selPlayerPos === 'SG'){
        $('#SG-row').html('').append(
            $('<td>').text(selPlayerPos),
            $('<td>').text(selPlayerName),
            $('<td>').text(selPlayerSal)
        ) 
    }else if(selPlayerPos === 'PF'){
        $('#PF-row').html('').append(
            $('<td>').text(selPlayerPos),
            $('<td>').text(selPlayerName),
            $('<td>').text(selPlayerSal)
        ) 
    }else if(selPlayerPos === 'SF'){
        $('#SF-row').html('').append(
            $('<td>').text(selPlayerPos),
            $('<td>').text(selPlayerName),
            $('<td>').text(selPlayerSal)
        ) 
    }
})

$(".tab").on('click', function(){
    var tabValue = $(this).val();
    if(tabValue === 'ALL'){
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
    }else{
        $('.available-player-row').removeClass('hidden')
        $(".tab").removeClass('active');
        $(this).addClass('active');
        console.log(tabValue)
        $('.available-player-row').filter(function(index){
            if($(this).val() != tabValue){
                return index
            }
        }).addClass('hidden')
    }

    
    // $('.available-player-row').addClass('hidden')
    // if($('.available-player-row').val() != tabValue){
    //     $('.available-player-row').addClass('hidden')
    // }
})

$('.available-player-row').on('click', function(){
    console.log($(this).val())
})
