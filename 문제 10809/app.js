const fs = require("fs");
const { resourceLimits } = require("worker_threads");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = input;
//console.log(N);

//아스키 코드를 활용해서 a ~ z까지가 97번 ~ 122번 까지이기에 반복해주고
//indexOf메서드를 통해 index값이 없다면 -1을 출력.
solution(N);

function solution(A) {
  // Write your code
  let result = [];
  for (let i = 97; i <= 122; i++) {
    result.push(A.indexOf(String.fromCharCode(i)));
  }
  console.log(result.join(" "));
}
