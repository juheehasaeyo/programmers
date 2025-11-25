function solution(s) {
    var cnt = 0;    
    s = s.split(' ');
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'Z') {
            cnt -= s[i-1];
        } else {
            cnt += Number(s[i]);  
        }  
    }
    return cnt;
}