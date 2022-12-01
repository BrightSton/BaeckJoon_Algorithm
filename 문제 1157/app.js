const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let N = input;
//console.log(N);

solution(N);

function solution(N) {
  // Write your code
  let lowN = N.toUpperCase().split("");
  let word = {};
  lowN.forEach((e) => {
    word[e] = (word[e] || 0) + 1;
  });
  let result = "";
  let count = 0;
  for (a in word) {
    if (word[a] > count) {
      count = word[a];
      result = a;
    } else if (word[a] === count) {
      result = "?";
    }
  }
  console.log(result);
}
