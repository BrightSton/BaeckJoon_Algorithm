const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input[1]
  .split(" ")
  .map((item) => +item)
  .sort((a, b) => a - b);

//console.log(N, arr);

solution(N, arr);

function solution(A, B) {
  // Write your code
  let answer = 0;
  for (let i = 0; i < A; i++) {
    answer += Number(((B[i] / B[A - 1]) * 100) / A);
  }
  console.log(answer.toFixed(3));
}
