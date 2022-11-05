const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

let A = +input[0];
let B = input;
//console.log(A, B);

solution(A, B);

function solution(A, B) {
  // Write your code
  let answer = "";
  for (let i = 1; i < A + 1; i++) {
    answer +=
      `Case #${i}: ${Number(B[i][0])} + ${Number(B[i][1])} = ${
        Number(B[i][0]) + Number(B[i][1])
      }` + "\n";
  }
  console.log(answer);
}
