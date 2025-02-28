function solution(my_string) {
    var answer = '';
    var list = 'aeiou';
    for(var i = 0; i < my_string.length; i++) {
        if(!list.includes(my_string[i])) {
            answer += my_string[i];
        }
    }
    return answer;
}