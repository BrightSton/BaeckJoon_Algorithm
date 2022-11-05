const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((item) => item.split(" "));

let A = +input[0];
let B = input;
//console.log(A, B);

// console.log()를 통해서 하나 하나 출력을 하면 시간 초과가 걸리기 때문에
// 하나의 문자값으로 출력을 하는 방법으로 해결!
solution(A, B);

function solution(A, B) {
  // Write your code
  let answer = "";
  for (let i = 1; i < A + 1; i++) {
    if (B[i][0] < 1001 && B[i][1] < 1001)
      answer += Number(B[i][0]) + Number(B[i][1]) + "\n";
  }
  console.log(answer);
}
