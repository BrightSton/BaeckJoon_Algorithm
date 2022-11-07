const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input[1].split(" ");
let V = input[2];
//console.log(N, arr, V);

solution(N, arr, V);

function solution(A, B, C) {
  // Write your code
  let i = 0;
  for (let j = 0; j < A; j++) {
    if (B[j] === C) {
      i++;
    }
  }
  console.log(i);
}
