function solution(my_string) {
    var answer = 0;
    for(var i = 0; i < my_string.length; i++) {
        const charStr = my_string[i];
        if(!isNaN(charStr)) {
            answer += Number(charStr);
        }
    }
    return answer;
}