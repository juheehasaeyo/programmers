function solution(left, right) {
    var answer = 0;
    for(var i = left; i <= right; i++) {
        var cnt = 0;
        for(var j = 1; j <= i; j++) {
            if(i % j == 0) {
                cnt += 1;
            }
        } 
        if(cnt % 2 == 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}