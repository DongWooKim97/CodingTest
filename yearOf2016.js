function solution(a, b) {
  var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU",];
  var sum = 0;
  for (let i = 0; i < a - 1; i++) {
    sum += month[i]
  }


  return days[(sum + b - 1) % 7];
}
console.log(solution(1, 24));