const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input.map((item) => +item);

//console.log(N);

solution(N);

function solution(A) {
  // Write your code

  const count = new Set(A.map((x) => x % 42)).size;

  console.log(count);
}
