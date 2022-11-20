/* let arr = new Array(100);
let arrFill = arr.fill();

let number = arrFill.map((a, i) => (a = i + 1));
//console.log(number);

const num = (n) => {
  let result = 0;
  for (let i = 0; i < n.length; i++)
    result[i] = n[i] + (n[i] % 10) + (n[i] - (n[i] % 10)) / 10;
  console.log(number.remove(result));
};

num(number); 
여기까지 내가 1차적으로 생각해낸 방식 1에서 100까지의 배열과 그 숫자로 더해서 만들어낸 
d(n)의 배열. 난 첫 번째 배열에서 두 번째 배열을 빼면 될거라는 간단한 생각을 하였다.*/

/*그저 알고리즘을 배울 때 마다 경의로움의 연속!!
내가 생각하는 사고방식과 컴퓨터가 받아드리는 사고방식의 차이란 도대체;;*/

function d(n) {
  let temp = n;
  let sum = temp;

  while (temp > 0) {
    sum += temp % 10;
    temp = parseInt(temp / 10);
  }
  return sum;
}

const N = 10000;
const selfNumCheckArr = new Array(N);
selfNumCheckArr.fill(false);

for (let i = 0; i <= N; i++) {
  selfNumCheckArr[d(i)] = true;
  if (!selfNumCheckArr[i]) {
    console.log(i);
  }
}
