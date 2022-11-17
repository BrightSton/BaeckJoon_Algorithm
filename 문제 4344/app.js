const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let arr = input.map((item) => item.split(" ").map((item) => +item));
//kconsole.log(N, arr);

solution(N, arr);

function solution(A, B) {
  // Write your code
  for (let i = 1; i <= A; i++) {
    let num = B[i].shift();
    let count = 0;

    let avg = B[i].reduce((a, b) => (a += b), 0);

    avg /= num;

    for (let j = 0; j < num; j++) {
      if (B[i][j] > avg) {
        count++;
      }
    }

    let result = ((count / num) * 100).toFixed(3);

    console.log(result + "%");
  }
}
