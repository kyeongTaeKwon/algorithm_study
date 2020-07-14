const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(...line.split(" ").map(el => parseInt(el)));
}).on("close", function () {
  let coinUnits = input[0];
  let targetAmount = input[1];
  let result = 0;
  input
    .slice(2)
    .filter(coin => targetAmount / coin >= 1)
    .reverse()
    .forEach(coin => {
      let n = 0;
      if (targetAmount / coin >= 1) {
        n = Math.floor(targetAmount / coin);
        targetAmount -= coin * n;
        result += n;
      }
    });

  console.log(result);
  process.exit();
});
