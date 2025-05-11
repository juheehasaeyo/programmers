function solution(q, r, code) {
    var answer = '';
    for(var i = 0; i < code.length; i++) {
        if(i % q == r) {
            answer += code[i];
        }
    }
    return answer;
}