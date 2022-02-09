// 나의 풀이 : 케이스 14에서만 탈락,, 이유를 못찾음
function solution(lottos, win_nums) {
  var result = [];
  var score = [6, 5, 4, 3, 2, 1];


  var min = win_nums.filter((it) => lottos.includes(it)).length;
  var max = lottos.filter((z) => z === 0).length + min;

  console.log(max, min);
  result.push(score.indexOf(max) + 1);
  result.push((score.indexOf(min) + 1) === 0 ? 6 : score.indexOf(min) + 1);


  return result;


}
console.log(solution([44, 1, 0, 0, 31, 24], [31, 10, 45, 1, 6, 19]));

// 타인의 풀이 : 비슷하면서 다름.
function solution2(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter(n => win_nums.includes(n)).length;
  const max = lottos.filter(n => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}