const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(
    ...line.split("\n").map(el => el.split(" ").map(el => parseInt(el)))
  );
}).on("close", function () {
  let count = 0;
  let currentTime = 0;
  let times = input
    .slice(1)
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      else if (a[1] < b[1]) return -1;
      else if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
    })
    .forEach(time => {
      let start = time[0];
      let end = time[1];
      if (currentTime <= start) {
        currentTime = end;
        count++;
      }
    });
  console.log(count);
  process.exit();
});
