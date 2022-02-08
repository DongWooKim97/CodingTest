// 내가 푼 풀이 : 너무 단순함
function solution(price, money, count) {
  var sum = 0;
  for (let i = 1; i < count + 1; i++) {
    sum = sum + (i * price);
  }
  return (sum < money) ? 0 : sum - money
}
console.log(solution(3, 20, 4));


// 가우스 공식 이용!! (활용법 이해완료)
function solution2(p, m, c) {
  const tmp = p * c * (c + 1) / 2 - m;
  return tmp > 0 ? tmp : 0
}

console.log(solution2(3, 20, 4));