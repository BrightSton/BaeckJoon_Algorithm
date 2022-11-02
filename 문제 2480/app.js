const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let A = input[0];
let B = input[1];
let C = input[2];

//console.log(A, B, C);

solution(+A, +B, +C);

function solution(A, B, C) {
  // Write your code
  if (A !== B && A !== C && B !== C) {
    console.log(Math.max(A, B, C) * 100);
  }
  if (A !== B || A !== C || B !== C) {
    if (A === B || A === C) {
      console.log(1000 + A * 100);
    }
    if (B === C) {
      console.log(1000 + B * 100);
    }
  }
  if (A === B && A === C && B === C) {
    console.log(10000 + A * 1000);
  }
}
