function solution(n) {
    var answer = 0;
    let str = n.toString();
    for(var i = 0; i < str.length; i++) {
        answer += parseInt(str[i]);
    }
    return answer;
}