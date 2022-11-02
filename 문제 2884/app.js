const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let A = input[0];
let B = input[1];

//console.log(+A, B);

solution(+A, +B);

function solution(A, B) {
  // Write your code
  if (A > 0 && A < 24) {
    if (B >= 45) {
      console.log(A, B - 45);
    } else {
      console.log(A - 1, B + 15);
    }
  }
  if (A === 0) {
    if (B >= 45) {
      console.log(A, B - 45);
    } else {
      console.log((A = 23), B + 15);
    }
  }
}
