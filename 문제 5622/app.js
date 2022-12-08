const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

let N = input;

//console.log(N);

solution(N);

function solution(A) {
  // Write your code
  let result = 0;
  for (let i = 0; i < A.length; i++) {
    if ((A[i] === "A") | (A[i] === "B") | (A[i] === "C")) {
      A[i] = 3;
    } else if ((A[i] === "D") | (A[i] === "E") | (A[i] === "F")) {
      A[i] = 4;
    } else if ((A[i] === "G") | (A[i] === "H") | (A[i] === "I")) {
      A[i] = 5;
    } else if ((A[i] === "J") | (A[i] === "K") | (A[i] === "L")) {
      A[i] = 6;
    } else if ((A[i] === "M") | (A[i] === "N") | (A[i] === "O")) {
      A[i] = 7;
    } else if (
      (A[i] === "P") |
      (A[i] === "Q") |
      (A[i] === "R") |
      (A[i] === "S")
    ) {
      A[i] = 8;
    } else if ((A[i] === "T") | (A[i] === "U") | (A[i] === "V")) {
      A[i] = 9;
    } else if (
      (A[i] === "W") |
      (A[i] === "X") |
      (A[i] === "Y") |
      (A[i] === "Z")
    ) {
      A[i] = 10;
    }
    result += A[i];
  }
  console.log(result);
}
