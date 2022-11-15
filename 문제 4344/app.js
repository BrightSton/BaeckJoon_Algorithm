const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input.map((item) => item.split(" ").map((item) => +item));
//kconsole.log(N, arr);

solution(N, arr);

function solution(A, B) {
  // Write your code

  for (let i = 1; i < A + 1; i++) {
    let count = 0;
    let sum = 0;
    let average = 0;
    for (let j = 1; j < B[i].length; j++) {
      sum += B[i][j] / B[i][0];
      console.log(sum);
      if (B[1][j] > sum) {
        count += 1;
        //console.log(count);
        average = (count / B[i][0]) * 100;
        //console.log(average);
      }
    }
  }
}
