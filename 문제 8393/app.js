const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = +input;

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  let sum = 0;
  for (let i = 1; i < A + 1; i++) {
    sum += i;
  }
  console.log(sum);
}
