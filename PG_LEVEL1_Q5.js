// 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930
function solution(s) {
    var x = s.split(' ');
    for (var i = 0; i < x.length; i++) {
        var re = x[i].split("");
        for (var j = 0; j < x[i].length; j++) {
            if (j % 2 == 0) {
                re[j] = re[j].toUpperCase();
            } else {
                re[j] = re[j].toLowerCase();
            }
        }
        x[i] = re.join('');
    }
    return x.join(' ');
}
console.log(solution("try hello world"));
//느낀점 : 다른 사람들의 풀이를 다시 한번 확인하자
// 문제를 끝까지 똑바로 이해하고 풀자
// 이항조건문과 map함수의 적절한 조화를 찾아보자