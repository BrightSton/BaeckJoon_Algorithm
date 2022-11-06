const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let B = +input;

//console.log(A);

// 처음 접근법을 십의 자리와 일의 자리를 문자열로 나눠서 계산해야 한다고 복잡하게 생각을
// 하니 문제 접근 자체가 어려워 졌다.
// 알고리즘은 단순해 져야 풀이가 단순해 지고, 속도에 우위를 가질 수 있다.
// 어려울 수록 돌아가자...

solution(B);

function solution(A) {
  // Write your code
  let sum = 0;
  let i = 0;
  while (true) {
    i++;
    sum = parseInt(A / 10) + (A % 10);
    A = (A % 10) * 10 + (sum % 10);
    if (A === B) {
      break;
    }
  }
  console.log(i);
}
