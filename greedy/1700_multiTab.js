const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(...line.split("\n").map(el => el.split(" ")));
}).on("close", function () {
  let result = 0;
  let inUse = {};
  let holes = input[0][0];
  let orders = input[1];
  orders.forEach((val, inx) => {
    if (!inUse[val]) {
      if (holes > 0) {
        inUse[val] = true;
        holes--;
      } else {
        let out = 0;
        for (let use in inUse) {
          if (orders.slice(inx + 1).indexOf(use) === -1) {
            // console.log("다음에 없어용", use, orders.slice(inx + 1));
            delete inUse[use];
            holes++;
            result++;
            out++;
            break;
          }
        }
        if (out === 0) {
          let lastUse = "";
          let distance = [];
          let currentUses = orders.slice(inx + 1);
          currentUses.forEach((el, inx) => {
            if (inUse[el]) {
              if (!distance.includes(el)) {
                distance.push(el);
              }
            }
          });
          // console.log("다음에 있긴한데 멀어용", distance);
          lastUse = distance.pop();
          delete inUse[lastUse];
          holes++;
          result++;
        }
        holes--;
        inUse[val] = true;
      }
    }
  });
  console.log(result);
  process.exit();
});
