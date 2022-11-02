const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let A = input[0].split(" ")[0];
let B = input[0].split(" ")[1];
let C = +input[1];

//console.log(+A, +B, C);

solution(+A, +B, +C);

function solution(A, B, C) {
  // Write your code
  let H = parseInt((A * 60 + B + C) / 60);
  let M = parseInt((A * 60 + B + C) % 60);

  console.log(H < 24 ? H : H % 24, M);
}
