const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];
//console.log(+input);

solution(+input);

function solution(A) {
  // Write yout code

  if (89 < A && A < 101) {
    console.log("A");
  } else if (79 < A && A < 90) {
    console.log("B");
  } else if (69 < A && A < 80) {
    console.log("C");
  } else if (59 < A && A < 70) {
    console.log("D");
  } else if (A < 60) {
    console.log("F");
  }
}
