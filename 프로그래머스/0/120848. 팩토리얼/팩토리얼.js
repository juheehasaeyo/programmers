function solution(n) {
    var answer = 0;
    var res = 1;
    for(var i = 1; i <= n; i++) {
        res *= i;
        if(res > n) break;
        answer = i;
    }
    return answer;
}