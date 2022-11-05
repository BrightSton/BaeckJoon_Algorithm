const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = +input;

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  let answer = "";
  let star = "*";
  for (let i = 1; i < A + 1; i++) {
    answer += star;
    console.log(answer);
  }
}
