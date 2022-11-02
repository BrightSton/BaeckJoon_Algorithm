const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");
//console.log(input);

let A = +input[0];
let B = +input[1];

solution(A, B);

function solution(A, B) {
  // Write yout code
  if (A > B) {
    console.log(">");
  }
  if (A < B) {
    console.log("<");
  }
  if (A === B) {
    console.log("==");
  }
}
