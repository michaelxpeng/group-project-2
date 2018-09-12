$('.action-drop').on('click', function(){
    $(this).parent('div').parent('div').remove();
})

$('.action-select').on('click', function(){
    $('.selected-team').removeClass('selected-team');
    $(this).parent('div').parent('div').find('.saved-team').addClass('selected-team')
})

$('#new-team').on('click', function(){
    location.href = "/selection";
});

$('#play-game').on('click', function(){
    location.href = "/game";
});