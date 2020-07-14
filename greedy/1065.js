const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = 0;
rl.on("line", function (line) {
  input = parseInt(line);
}).on("close", function () {
  let res = 0;
  if (input < 100) res = input;
  else {
    res = 99;
    for (let i = 100; i <= input; i++) {
      let nums = i
        .toString()
        .split("")
        .map(el => parseInt(el));
      if (nums[0] - nums[1] === nums[1] - nums[2]) res++;
    }
  }

  console.log(res);
  process.exit();
});
