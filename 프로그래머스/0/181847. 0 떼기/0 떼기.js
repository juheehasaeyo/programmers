function solution(n_str) {
    var answer = '';
    if(n_str[0] == 0) {
        answer += n_str.replace(/^0+/, '');
    } else {
        answer = n_str;
    }
    return answer;
}