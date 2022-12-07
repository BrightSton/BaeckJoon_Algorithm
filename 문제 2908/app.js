const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = input[0].split("").reverse().join("");
let B = input[1].split("").reverse().join("");

//console.log(A, B);

solution(A, B);

function solution(A, B) {
  // Write your code
  if (A > B) {
    console.log(Number(A));
  } else {
    console.log(Number(B));
  }
}
