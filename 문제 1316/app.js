const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let A = input;

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  let count = 0;
  for (let i = 1; i <= A[0]; i++) {
    let word = [];
    let depword = true;
    for (let j = 0; j < A[i].length; j++) {
      if (word.indexOf(A[i][j]) === -1) {
        word.push(A[i][j]);
      } else {
        if (word.indexOf(A[i][j]) !== word.length - 1) {
          depword = false;
          break;
        }
      }
    }
    if (depword) {
      count++;
    }
  }
  console.log(count);
}
