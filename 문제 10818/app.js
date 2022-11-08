const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input[0];
let arr = input[1].split(" ");

//console.log(N, arr);

solution(N, arr);

function solution(A, B) {
  // Write your code
  let lawer = B[0];
  let higher = B[0];
  for (let i = 0; i < A; i++) {
    if (lawer > +B[i]) {
      lawer = B[i];
    }
    if (higher < +B[i]) {
      higher = B[i];
    }
  }
  console.log(`${lawer} ${higher}`);
}

// 이 코드는 왜 런타임 에러가 뜨는 것인지 이해를 할 수 가 없다...
/* function solution(A, B) {
  // Write your code
  let lawer = 0;
  let higher = 0;
  for (let i = 0; i < A; i++) {
    if (+B[i - 1] > +B[i]) {
      lawer = B[i];
    }
    if (+B[i - 1] < +B[i]) {
      higher = B[i];
    }
  }
  console.log(lawer, higher);
} */
