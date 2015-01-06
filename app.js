// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

function* fibonacci() {
  let prev = 0;
  let curr = 1;
  for (;;) {
    let tmp = prev + curr;
    prev = curr;
    curr = tmp;
    yield curr;
  }
}

for (n of fibonacci()) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  console.log(n);
}

function fibonacii() {
  var pre = 0;
  var cur = 1;
  console.log(pre);
  console.log(cur);
  while (true) {
    var sum = pre + cur;
    pre = cur;
    cur = sum;
    console.log(sum);
  }
}