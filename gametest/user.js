
// // function collectStats () {
// //     for (let i = 0; i < this.gameLog.length; i++) {
// //         $(".gameLog").append('<div class="gameEvent">'+this.gameLog[i]+'</div>'); 
// //     }
// //     return;
// // }

//     // function scoreboard () {

//     //     //Push the quarter points into an array individually
//     //     //Incrementally add the next point until it equals zero
//     // }

// // var simSpeed = function(){

  
// //     var slider = $('.simSlider'),
// //         range = $('.simSliderRange'),
// //         value = $('.simSliderValue');
      
// //     slider.each(function(){
       
// //       value.each(function(){
// //         var value = $(this).prev().attr('value');
// //         $(this).html(value);
       
// //       });
  
// //       range.on('input', function(){
// //         $(this).next(value).html(this.value);
// //         userSimSpeed = this.ui.value
// //         // console.log(userSimSpeed);
     
// //       });
// //     });
// //   };
  
// //   simSpeed();

// function updateScroll(){
//     var realHeight = $(".gameBox").scrollHeight;
//     $(".gameBox").scrollTop(realHeight);


// };

// updateScroll();

// var updateScroll = setInterval(function() {
//         var userLog = $(".gameBox");

//     // allow 1px inaccuracy by adding 1
//     var isScrolledToBottom = userLog.scrollHeight - userLog.clientHeight <= userLog.scrollTop + 1;
//     console.log(userLog.scrollHeight - userLog.clientHeight,  userLog.scrollTop + 1);

//     // scroll to bottom if isScrolledToBotto
//     if(isScrolledToBottom)
//       userLog.scrollTop = userLog.scrollHeight - userLog.clientHeight;
// }, 1);

// // var realHeight = $("#userLog")[0].scrollHeight;
// // $("#userLog").scrollTop(realHeight);

// var div = $('.gameBox'),
//     height = div.height();

// console.log(div.height())

// $('#add').on('click', function(){
//     div.append('<p>Lorem ipsum dolor sit amet, solet nostrud concludaturque no eam. Ne quod recteque pri. Porro nulla zril mei eu. Eu nibh rebum pri, eu est maiorum menandri, ridens tamquam abhorreant te eum. Ipsum definiebas ad mel.</p>');
//     div.animate({scrollTop: height}, 500);
//     height += div.height();
// });


// // function addListItem(){
// //     var message = document.createElement('li');
// //   message.innerHTML = 'd';

// //   document.getElementById('scroll').scrollTop = message.offsetHeight + message.offsetTop; 

// //   document.getElementById('scroll').appendChild(message);
// // }

// // window.setInterval(function() {
// //     var elem = $(".gameLog");
// //     elem.scrollTop = elem.scrollHeight;
// //   }, 1);

// //   function scrollSmoothToBottom () {
// //     var div = $('.gameBox');
// //     $('.gameBox').animate({
// //        scrollTop: div.scrollHeight - div.clientHeight
// //     }, 500);
// //  }

// var scrolled = false;
// function updateScroll(){
//     // if(!scrolled){
//         var element = $(".gameBox");
//         element.scrollTop = element.scrollHeight;
//     // }
// }

// $(".gameBox").on('scroll', function(){
//     debugger
//     scrolled=true;
// });

// $(document).ready(function(){
//     $(".gameLog").scroll(function(){
//         debugger
//     });
// });

// updateScroll();
// setInterval(updateScroll,1);

// $(document).on('click', '#table-test', function(){
//     console.log('it works');
// })

setTimeout(function($){
    $('#table-test').on('click',  function(){

        for(var i = 0; i <  10; i++){
            $('#name-player'+i).text('player'+i);
            $('#PTS-player'+i).text(i);
            $('#FG-player'+i).text(i);
            $('#3PT-player'+i).text(i);
            $('#FT-player'+i).text(i);
            $('#OREB-player'+i).text(i);
            $('#REB-player'+i).text(i);
            $('#AST-player'+i).text(i);
            $('#STL-player'+i).text(i);
            $('#BLK-player'+i).text(i);
            $('#TOV-player'+i).text(i);
            $('#FLS-player'+i).text(i);
        }
    })
}, 0, $);



// function gotoBottom(){
//     var element = $(".gameBox");
//     element.scrollTop = element.scrollHeight - element.clientHeight;


// }

// gotoBottom();


// window.setInterval(function() {
//     // debugger

//     $(".gameBox").scrollTop =  $(".gameBox").scrollHeight;
//   }, 1);

// $('html,body').animate({scrollTop: ($(".gameBox").scrollHeight)},"fast");

// var scroll_to_bottom = function(element){
//     var tries = 0, old_height = new_height = element.height();
//     var intervalId = setInterval(function() {
//         if( old_height != new_height ){    
//             // Env loaded
//             clearInterval(intervalId);
//             element.animate({ scrollTop: new_height }, 'slow');
//         }else if(tries >= 30){
//             // Give up and scroll anyway
//             clearInterval(intervalId);
//             element.animate({ scrollTop: new_height }, 'slow');
//         }else{
//             new_height = content.height();
//             tries++;
//         }
//     }, 100);
// }

var userScroll = false;

function scrollDown() {
    // setTimeout(function() {
    //   var elem = document.getElementById('miniChat');
    //   elem.scrollTop = elem.scrollHeight;
    // }, 400);
    
    $('.gameBox').animate({scrollTop: $('.gameBox').prop("scrollHeight")}, scrollSpeed);
}



function slowSim () {

    scrollSpeed = 80;
    textSpeed = 365;
    logSpeed = 2430;
    appendSpeed = 1000;

    $(".startButton").css("content", "Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

    
};

function normalSim () {

    scrollSpeed = 35;
    textSpeed = 60;
    logSpeed = 400;
    appendSpeed = 375;

    $(".startButton").css("content", "Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

};

function fastSim () {

    scrollSpeed = 20;
    textSpeed = 30;
    logSpeed = 180;
    appendSpeed = 180;

    $(".startButton").css("content", "Start Game");
    speedSelected = true;
    $('.slowButton, .normalButton, .fastButton').fadeOut();

};
