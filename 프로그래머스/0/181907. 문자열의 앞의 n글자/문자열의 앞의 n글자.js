function solution(my_string, n) {
    var answer = '';
    for(var i=0; i<n; i++) {
        answer += my_string[i];
    }
    return answer;
}