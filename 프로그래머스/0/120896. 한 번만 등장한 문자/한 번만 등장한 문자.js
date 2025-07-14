function solution(s) {
    var answer = '';
    for(var i = 0; i < s.length; i++) {
        var cnt = 0;
        for(var j = 0; j < s.length; j++) {
            if(s[i] == s[j]) {
                cnt += 1;
            }
        }
        if(cnt == 1) {
            answer += s[i];
        }
    }
    return answer.split('').sort().join('');
}