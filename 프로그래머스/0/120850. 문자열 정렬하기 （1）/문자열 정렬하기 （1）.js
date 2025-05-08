function solution(my_string) {
    var answer = [];
    for(var i = 0; i < my_string.length; i++) {
        if(!isNaN(my_string[i])) {
            answer.push(Number(my_string[i]));
        }
    }
    answer.sort((a,b) => a - b);
    return answer;
}