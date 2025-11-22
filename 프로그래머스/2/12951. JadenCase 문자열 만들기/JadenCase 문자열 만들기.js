function solution(s) {
    var answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if(s[i-1] === ' ' || i === 0) {
            answer += s[i].toUpperCase();
        } else {
            answer += s[i].toLowerCase();
        }
    }
    return answer;
}