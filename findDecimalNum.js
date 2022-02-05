function solution(n) {
  var arr = [];
  var cnt = 0;
  for (var i = 0; i < n + 1; i++) {
    arr.push(true);
  }

  for (var i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (var j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  arr.splice(0, 2, false, false);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) cnt++;
  }

  return cnt++;
}
//에라토스테네스의 체 이용방법 다시 확인!