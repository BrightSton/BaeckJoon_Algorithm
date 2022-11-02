const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let X = +input[0];
let Y = +input[1];

//console.log(A, B);

// filePath 부분에 0을 집어 너어야 통과됨. 이유는 모르겠음...

solution(X, Y);

function solution(A, B) {
  // Write your code
  if (0 < A && 0 < B) {
    console.log("1");
  }
  if (0 > A && 0 < B) {
    console.log("2");
  }
  if (0 > A && 0 > B) {
    console.log("3");
  }
  if (0 < A && 0 > B) {
    console.log("4");
  }
}
