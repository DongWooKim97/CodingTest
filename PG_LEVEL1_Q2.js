// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935
// 1st try -> fail
// function solution(arr) {
//     var list = arr.sort(function (a, b) {
//         return b - a;
//     });
//     list.pop();
//     if (list.length === 0) {
//         list.push(-1);
//         return list;
//     }
//     return list;
// }
// var aa = [10];
// console.log(solution(aa));
//error -> 배열 순서 바뀌면 안되는걸 인지 못함 ! reTry

//2nd Try
function solution(arr) {
    var index = arr.indexOf(Math.min.apply(Math, arr));
    arr.splice(index, 1);
    if (arr.length == 0) {
        arr.push(-1);
        return arr;
    }
    return arr;



}
var aa = [10];
console.log(solution(aa));

//내가 몰랐던 것 : 1) Math.max.apply(Math, a) --> .apply를 추가하여 사용하는 방법
// 2) splice하고 남은 array와 배열에 담은 array가 상이하다는 것 !