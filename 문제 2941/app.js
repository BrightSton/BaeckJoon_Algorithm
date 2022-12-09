const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let A = input;

//console.log(A);

solution(A);

function solution(A) {
  // Write your code
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let alphabet of croatia) {
    A = A.split(alphabet).join(" ");
  }
  console.log(A.length);
}
