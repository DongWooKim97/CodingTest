function solution(seoul) {
  var x = seoul.map((e, i) => {
    if (e === "Kim") return i;

  }).join('');

  return `김서방은 ${x}에 있다`;


}
console.log(solution(["Jane", "lee", 'as', 'asd', "Kim"]));

//맞는 답이긴 하지만 굳이 map과 조인을 썻어야했나?
// 내가 생각하는 이상적 풀이 (타인)
// function findKim(seoul) {
//   return "김서방은 " + seoul.indexOf('Kim') + "에 있다";
// }