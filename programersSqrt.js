function solution(n) {
    var dap = 0;
    var x = Math.sqrt(n);
    console.log(x);
    for (let i = 0; i <= x + 1; i++) {
        if (i === x) {
            return (i + 1) * (i + 1);
        }
    }
    return -1

}
console.log(solution(3));