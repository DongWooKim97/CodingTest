function solution(a, b) {
  var sum = 0;
  var temp = 0;
  if (a > b) {
    temp = a;
    a = b;
    b = temp;

  }
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum
}
console.log(solution(3, 5));

//다른 이들의 풀이 : best!!
// function adder(a, b) {
//   var result = 0
//   return (a + b) * (Math.abs(b - a) + 1) / 2;
// }
// console.log(adder(3, 5))
// 가우스 공식 확인하기!!