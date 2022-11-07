const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input[0].split(" ")[0];
let arr = input[1].split(" ");
let X = input[0].split(" ")[1];
//console.log(N, arr, X);

solution(N, arr, X);

function solution(A, B, C) {
  // Write your code
  let answer = "";
  for (let j = 0; j < A; j++) {
    if (+B[j] < +C) {
      answer += B[j] + " ";
    }
  }
  console.log(answer);
}
