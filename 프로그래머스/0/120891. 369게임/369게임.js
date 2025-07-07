function solution(order) {
    var answer = 0;
    let str = String(order);
    for(var i = 0; i < str.length; i++) {
        if(str[i] == '3' || str[i] == '6' || str[i] == '9') {
            answer += 1;
        }
    }
    return answer;
}