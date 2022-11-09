const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input.map((item) => +item).sort((a, b) => a - b);

//console.log(N);

solution(N);

function solution(A) {
  // Write your code
  let st = Array(30)
    .fill()
    .map((item, i) => i + 1);
  A.forEach(function (item) {
    let index = st.indexOf(item);

    if (index !== -1) {
      st.splice(index, 1);
    }
  });

  console.log(st[0]);
  console.log(st[1]);
}
