function solution(message) {
    var answer = 0;
    for(var i = 0; i < message.length; i++) {
        answer++;
    }
    answer *= 2;
    return answer;
}