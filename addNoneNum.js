function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);

}

let numbers = [5, 8, 4, 0, 6, 7, 9];
console.log(solution(numbers)); // 6