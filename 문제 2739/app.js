const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = input[0];

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  for (let i = 1; i < 10; i++) {
    console.log(`${A} * ${i} = ${A * i}`);
  }
}
