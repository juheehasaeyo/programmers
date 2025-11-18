function solution(s){
    var answer = true;
    s = s.split('');

    var cnt = 0;
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            cnt += 1;
        } else {
            cnt -= 1;
        }
        if(cnt < 0) {
            return false;
        }
    }
    if(cnt === 0) answer = true;
    else answer = false;
    
    return answer;
}