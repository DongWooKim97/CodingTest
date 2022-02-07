// 풀이 1 -> filter 활용
function solution1(s) {
  var li1 = s.toLowerCase().split('').filter((e) => 'p' === e).length;
  var li2 = s.toLowerCase().split('').filter((e) => 'y' === e).length;

  if (li1 === li2) {
    return true;
  }
  return false;
}
// 풀이 2 -> reduce 활용
function solution2(s) {
  var count1 = s.toLowerCase().split('').reduce((c, e) => c + ('p' === e), 0);
  var count2 = s.toLowerCase().split('').reduce((c, e) => c + ('y' === e), 0);

  if (count1 === count2) {
    return true;
  }
  return false;
}

console.log(solution1("pPoooyY"));
console.log(solution2("pPoooyY"));
