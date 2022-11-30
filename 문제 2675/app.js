const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = input;
//console.log(N);

solution(N);

function solution(N) {
  // Write your code
  let word = [];
  for (let i = 1; i < N.length; i++) {
    let result = "";
    word = N[i].split(" ");
    //console.log(word);
    for (let j = 0; j < word[1].length; j++) {
      result += word[1][j].repeat(word[0]);
    }
    console.log(result);
  }
}
