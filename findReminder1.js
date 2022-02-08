// 내가 한 풀이
function solution1(n) {
  var li = [];
  for (let i = 2; i < n; i++) {
    if (n % i === 1)
      li.push(i);
  }
  return li.shift();
}

// 타인의 풀이
function solution2(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}