// // 정수 내림차순으로 배치하기
// // https://programmers.co.kr/learn/courses/30/lessons/12933
// function solution(n) {
//     var num = 1;
//     // var x = n.toString().split("").sort((a, b) => {
//     //     return b - a
//     // }).map((item) => {
//     //     return parseInt(item);
//     // });
//     var x = Number(n.toString().split("").sort().reverse().join(""));


//     return x;
// }

// console.log(solution(118372));
// //느낀점 : 
// // join함수에 대해 잘 몰랐음.
// // toString - String , Number - parseInt 차이를 잘 몰랐음 

var x = 11345;
var u = x.toString().split("").sort((a, b) => { return b - a });
var q = x.toString().split("").sort().reverse();
var e = x.toString().split("").sort();
var z = x.toString().split("").sort((a, b) => { return a - b });
console.log(u);
console.log(q);
console.log(e, z);