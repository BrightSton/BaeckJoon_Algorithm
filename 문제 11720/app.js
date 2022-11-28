const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let A = input[1].split("");
//console.log(N, A);

solution(N, A);

function solution(A, B) {
  // Write your code
  let sum = 0;
  for (let i = 0; i < A; i++) {
    sum += +B[i];
  }
  console.log(sum);
}
