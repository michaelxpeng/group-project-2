//30k salary cap
//PER ranges
//30 33% of cap
//29 31%

//28 29%
//27 27%
//26 26%
//25 25%
// 24 24%
//23 23%
//22 22%
//21 21%
//20 20%
//19 19%
// 18 18%
// 17 17%
//16 16%
//15 15%

// set initial salary cap
var salaryCap = 12000;

//per and usage rate avg /100 as percentage of salary cap

var efficiency = per;
var usage = usgPCT;
var total = 0;
var average = 0;
var percentage = 0;
var value = 0;

$(".add-player").on("click", function (event) {
    event.preventDefault();
  total += efficiency + usage;
  average = total/2;
  percentage = average/100;
  value += salaryCap * percentage;
  value = value.toFixed(0)
  
  console.log(total);
  console.log(percentage);
  console.log(average);
  console.log(efficiency);
  console.log(value);
  
  

  });



