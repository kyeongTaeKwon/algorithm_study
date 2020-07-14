const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(...line.split("\n"));
}).on("close", function () {
  let res = 0;
  let numsArray = input
    .slice(1)
    .map(arr => arr.split(" ").map(el => parseInt(el)));

  let sortedA = numsArray[0].sort((a, b) => b - a);
  let sortedB = numsArray[1].sort((a, b) => a - b);

  sortedA.forEach((el, i) => {
    res += sortedA[i] * sortedB[i];
  });
  console.log(res);
  process.exit();
});
