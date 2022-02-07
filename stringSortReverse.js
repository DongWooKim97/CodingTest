function solution(s) {
  return s.split('').sort().reverse().join('');
}
console.log(solution("Zbcdefg"));
// split : 문자열을 쪼개서 배열로 만든다
// sort : 배열을 알파벳 순서대로 정렬시킨다.(자바스크립트 빌트인 sort메서드는 자체적으로 대문자와 소문자별로 정렬)
// reverse : 배열을 내림차순으로 정렬 변경
// join : 배열을 합쳐서 문자열로 다시 구성