const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = input;
//console.log(N);

solution(N);

function solution(A) {
  // Write your code
  let count = 0;
  for (let i = 1; i <= +A; i++) {
    if (i < 100) {
      count++;
    } else if (i >= 100 && i < 1000) {
      let num = String(i);
      let dif1 = Number(num[0]) - Number(num[1]);
      let dif2 = Number(num[1]) - Number(num[2]);
      if (dif1 === dif2) {
        count++;
      }
    }
  }
  console.log(count);
}
