// 나의 잘못된 풀이 
// 자꾸 기존 배열을 유지해 기존 배열 요소를 삭제하려고만 함 
// 그렇기에 삭제까진 되는데 시간복잡도에서 탈락(시간초과)
// function solution(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var j = i + 1;
//     while (i < arr.length - 1) {
//       if (arr[i] != arr[j]) break;
//       arr.splice(j, 1);
//     }
//   }
//   return arr;
// }
// console.log(solution([1, 1, 3, 3, 0, 1, 1]));
// console.log(solution([4, 4, 4, 3, 3]));

//
//// 다른이의 풀이 1
//
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

//
//// 다른이의 풀이 1
//
function solution(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}