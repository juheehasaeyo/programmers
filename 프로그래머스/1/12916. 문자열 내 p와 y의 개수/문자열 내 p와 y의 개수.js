function solution(s){
    var answer = true;
    var cnt_p = 0;
    var cnt_y = 0;
    s = s.toLowerCase();
    
    for(var i = 0; i < s.length; i++) {
        if(s[i] == "p") {
            cnt_p += 1;
        } else if(s[i] == "y") {
            cnt_y += 1;
        }
    }
    if(cnt_p == cnt_y) {
            answer = true;
    } else {
            answer = false;
    }
    return answer;
}