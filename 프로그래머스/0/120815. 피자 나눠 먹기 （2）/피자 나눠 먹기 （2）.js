function solution(n) {
    var answer = 1;
    while(true) {
        if(6 * answer % n === 0) {
            break;
        } else {
            answer += 1;
        }
    }
    return answer;
}