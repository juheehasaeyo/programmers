function solution(intStrs, k, s, l) {
    var answer = [];
    for(var i = 0; i < intStrs.length; i++) {
        var str = intStrs[i].substring(s, s+l);
        if(parseInt(str) > k) {
            answer.push(parseInt(str));
        }
    }
    return answer;
}
