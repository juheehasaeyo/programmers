function solution(n) {
    var answer = 0;
    var res = Math.sqrt(n);
    if(res % 1 === 0) {
        answer = Math.pow(res+1, 2)
    } else {
        answer = -1;
    }
    return answer;
}