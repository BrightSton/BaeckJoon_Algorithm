const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let X = +input[0];
let Y = +input[1];

//console.log(A, B);

solution(X, Y);

// EACCES 런타임 에러로 FilePath 부분에 0을 넣고 돌리면 참으로 나옴.

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
