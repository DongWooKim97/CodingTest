// 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931
function solution(n) {
    // 1st try
    // var x = n.toString().split("").map((item) => { return Number(item) });
    // var sum = x.reduce((acc, cur) => {
    //     return acc + cur;
    // }, 0)

    var x = n.toString().split("").reduce((acc, cur) => {
        return Number(acc) + Number(cur);
    }, 0)
    return x;

}
