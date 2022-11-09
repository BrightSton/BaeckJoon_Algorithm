const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input.map((item) => +item);

//console.log(N);

// j = i++로 하면 계속해서 에러가 발생하는데, j = i로 하고 제출하면 통과.
solution(N);

function solution(A) {
  // Write your code
  let j = 0;
  let higher = +A[0];
  for (let i = 1; i < A.length + 1; i++) {
    if (higher < A[i]) {
      higher = A[i];
      j = i;
    }
  }
  console.log(higher);
  console.log(j + 1);
}
