function* fibonacci() {
  let [prev, curr] = [0, 1];
  for (;;) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (n of fibonacci()) {
  // truncate the sequence at 1000
  if (n > 1000)
    break;
  print(n);
}