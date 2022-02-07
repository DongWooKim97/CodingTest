function solution(arr, divisor) {
  var li = [];
  arr.map((v, i) => {
    if (v % divisor == 0) {
      li.push(v);
    }
  });
  // if (!li.length) return [-1];
  // else return li.sort((a, b) => a - b);
  return li.length ? li.sort((a, b) => a - b) : [-1];

}
console.log(solution([5, 9, 7, 10], 5));

// 다른이 풀이
// function solution(arr, divisor) {
//   var answer = [];
//   arr.map((o) => {
//       o % divisor === 0 && answer.push(o);
//   })
//   return answer.length ? answer.sort((a, b) => a - b) : [-1];

// }
