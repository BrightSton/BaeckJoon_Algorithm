const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let A = +input[0];
let B = +input[1];
let C = input;
//console.log(A, B, C);

solution(A, B, C);

function solution(A, B, C) {
  // Write your code
  let sum = 0;
  for (let i = 2; i < B + 2; i++) {
    sum += Number(C[i][0]) * Number(C[i][1]);
  }
  if (sum === A) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
