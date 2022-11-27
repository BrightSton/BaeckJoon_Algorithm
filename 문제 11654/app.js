const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = input;
//console.log(N);

solution(N);

function solution(A) {
  // Write your code
  console.log(A.charCodeAt(0));
}
