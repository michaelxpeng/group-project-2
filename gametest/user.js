
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
    
//     var realHeight = $("#userLog").scrollHeight;
//     $("#userLog").scrollTop(realHeight);


// };


// // var updateScroll = setInterval(function() {
// //         var userLog = $(".gameBox");

// //     // allow 1px inaccuracy by adding 1
// //     var isScrolledToBottom = userLog.scrollHeight - userLog.clientHeight <= userLog.scrollTop + 1;
// //     console.log(userLog.scrollHeight - userLog.clientHeight,  userLog.scrollTop + 1);

// //     // scroll to bottom if isScrolledToBotto
// //     if(isScrolledToBottom)
// //       userLog.scrollTop = userLog.scrollHeight - userLog.clientHeight;
// // }, 1000);

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