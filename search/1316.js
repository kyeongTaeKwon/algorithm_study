const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(...line.split("\n"));
}).on("close", function () {
  let words = input.slice(1).filter(word => {
    return groupWordCheck(word);
  });
  console.log(words.length);
  process.exit();
});

let groupWordCheck = word => {
  let chrs = Array.from(word); //[h,a,p,p,y]
  let isGroupWord = true;
  chrs.forEach(chr => {
    let first = chrs.indexOf(chr); // 2
    let last = chrs.lastIndexOf(chr); //3
    if (first !== last) {
      let targetChrs = chrs.slice(first, last + 1); // [p,p]
      let diff = targetChrs.filter(target => chr !== target); //[b,c] abca
      // isGroupWord = targetChrs.every(target => chr === target);
      if (diff.length > 0) isGroupWord = false;
    }
  });
  return isGroupWord;
};
