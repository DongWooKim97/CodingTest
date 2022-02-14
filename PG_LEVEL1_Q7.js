function solution(left, right) {
  var sum = 0;
  for (let a = left; a <= right; a++) {
    var count = 0;
    for (let b = 1; b <= a; b++) {
      if (a % b === 0) {
        count++;
      }
    }
    (count % 2 === 0) ? sum += a : sum -= a;
  }
  return sum;
}

console.log(solution(13, 17));