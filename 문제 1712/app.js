const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = +input[0];
let B = +input[1];
let C = +input[2];

//console.log(A);

solution(A, B, C);

function solution(A, B, C) {
  // Write your code
  // 소수점이 나올 수 있으니
  let result = Math.floor(A / (C - B)) + 1;
  C >= B ? console.log(result) : console.log(-1);
}
