const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input;
//console.log(N, arr);

solution(N, arr);

function solution(A, B) {
  // Write your code

  for (let i = 1; i < A + 1; i++) {
    let count = 0;
    let sum = 0;
    for (let j = 0; j < B[i].length; j++) {
      if (B[i][j] === "O") {
        count++;
      } else {
        count = 0;
      }
      sum += count;
    }
    console.log(sum);
  }
}
