function solution(a, b) {
    var answer = 0;
    minN = Math.min(a, b);
    maxN = Math.max(a, b);
    for (var i = minN; i <= maxN; i++) {
        answer += i;
    }
    return answer;
}