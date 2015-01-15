// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }
var later = require('later');
// function* fibonacci() {
//   let prev = 0;
//   let curr = 1;
//   for (;;) {
//     let tmp = prev + curr;
//     prev = curr;
//     curr = tmp;
//     yield curr;
//   }
// }
var tweet = require('./tweet.js');

function foo() {
  var prev = 0;
  var curr = 1;

  return function () {
    //console.log(pre);
    var tmp = prev + curr;
    var hold_prev = prev;
    prev = curr;
    curr = tmp;
    return hold_prev;
  }
}

//why this line of code???
var test = foo();
var sched = later.parse.recur().every(1).hour();
later.setInterval(function () {
  console.log(test());
  tweet(test());
}, sched);

// for (n of fibonacci()) {
//   // truncate the sequence at 1000
//   if (n > 1000)
//     break;
//   console.log(n);
// }

// function fibonacii() {
//   var pre = 0;
//   var cur = 1;
//   console.log(pre);
//   console.log(cur);
//   while (true) {
//     var sum = pre + cur;
//     pre = cur;
//     cur = sum;
//     console.log(sum);
//   }
// }

