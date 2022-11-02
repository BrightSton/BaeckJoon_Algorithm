const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

//console.log(input);

let A = parseInt(input[0]);
let B = parseInt(input[1]);

solution(A, B);

function solution(A, B) {
  // Write yout code
  const C = B.toString().split("");
  console.log(A * parseInt(C[2]));
  console.log(A * parseInt(C[1]));
  console.log(A * parseInt(C[0]));
  console.log(A * B);
}
