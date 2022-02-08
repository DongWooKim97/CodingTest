function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j])
    }
  }
  //내가 푼 마지막 리턴방식 
  // return answer.sort((a, b) => a - b).filter((e, i) => {
  //   return answer.indexOf(e) === i;
  // });
  // 다른 풀이 spread operator와 set활용
  const final = [...new Set(answer)];
  return final.sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 4, 1]));