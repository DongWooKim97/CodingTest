// 1st Try
// function solution(n) {
//     var dap = 0;
//     var x = Math.sqrt(n);
//     console.log(x);
//     for (let i = 0; i <= x + 1; i++) {
//         if (i === x) {
//             return (i + 1) * (i + 1);
//         }
//     }
//     return -1

// }
// console.log(solution(3));

/////2nd Try
function solution(n) {
    for (let i = 0; i <= Math.sqrt(n); i++) {
        if (i === Math.sqrt(n)) return (i + 1) ** 2;
    }
    return -1
}
console.log(solution(16));