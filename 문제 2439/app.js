const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let A = +input;

//console.log(A);

// 방법은 2가지로 for문을 2번 사용하는 방법과 새로운 배열을 만들어서 별을 채우는 방식.
solution(A);

/* function solution(A) {
  for (let i = 0; i < A; i++) {
    let star = "";
    for (let j = A - 1; j >= 0; j--) {
      star += j <= i ? "*" : " ";
    }
    console.log(star);
  }
} */

function solution(A) {
  // Write your code
  let star = new Array(A).fill(" ");
  for (let i = A - 1; 0 <= i; i--) {
    star[i] = "*";
    console.log(star.join(""));
  }
}
