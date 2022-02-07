// // function solution(s) {
// //   return ((s.length === 6) || (s.length === 4) && s.split('').every((item) => {
// //     return !isNaN(item);
// //   }))
// // }
// // console.log(solution("1234"));

// var a = "a123";

// var x = a.split('').every((item) => {
//   !isNaN(item)
// });
// console.log(x);
function solution(s) {
  return ((s.length === 6) || (s.length === 4) && s.split('')
    .every((item) => {
      console.log(item);
      !isNaN(item)
    }))
}
console.log(solution("1234"));