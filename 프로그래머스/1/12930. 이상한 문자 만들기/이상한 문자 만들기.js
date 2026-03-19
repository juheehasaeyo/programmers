function solution(s) {
    var answer = '';
    let idx = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            idx = 0; // 공백 나오면 초기화
        } else {
            if (idx % 2 === 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            idx++;
        }
    }
    return answer;
}