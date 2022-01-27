// 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932
// 1st try -> fail, 문자열을 뒤집을 생각을 못하고 내림차순으로 해버렸음
// var b = a.toString().split("").sort((a, b) => { return b - a }).map(function (item) {
//     return parseInt(item, 10);
// });
// 2nd try
function solution(n) {
    var x = n.toString().split("").reverse().map(item => parseInt(item));
    return x;
}
console.log(solution(12345));


// 다른 사람 풀이 -> 숫자로 풀이함.
// 12345라는 숫자를 10으로 나누고 나머지를 배열에 push.
// 그리고 값을 10으로 나누어 줄여나가서 0 이상일때 까지 진행.
// var arr = [];
// do {
//     arr.push(a % 10);

//     console.log(arr, a % 10);
//     a = Math.floor(a / 10);
//     console.log(a);
// } while (a > 0);
// console.log(arr);

