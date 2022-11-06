const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let A = input;

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  let answer = 0;
  for (let i = 0; i < A.length - 1; i++) {
    answer = Number(A[i][0]) + Number(A[i][1]);
    console.log(answer);
  }
}
