// 나의 풀이
function solution(d, budget) {
  var s = d.sort((a, b) => a - b);
  var s1 = d.sort();
  console.log(s, s1);
  var sum = 0;
  var count = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] > budget - sum) break;
    sum += s[i];
    count++;
  }

  return count;
}
console.log(solution([1, 3, 2, 5, 4], 9));
// console.log(solution([2, 2, 3, 3], 10));
// 다른 풀이 -> forEach문 사용 , sort()문 내부 확인!
function solution1(d, budget) {
  let answer = 0;
  let money = 0;
  d.sort((a, b) => a - b).forEach(function (val) {
    money += val;
    if (money <= budget) {
      answer++;
    }

  })
  return answer;
}
