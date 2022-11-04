const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item.split(" "));

let T = input;
let L = +input[0];
//console.log(T, L);

solution(T, L);

function solution(T, L) {
  // Write your code

  for (let i = 1; i < L + 1; i++) {
    console.log(Number(T[i][0]) + Number(T[i][1]));
  }
}
