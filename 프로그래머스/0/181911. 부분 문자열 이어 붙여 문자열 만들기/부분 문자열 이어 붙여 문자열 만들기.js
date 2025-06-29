function solution(my_strings, parts) {
    var answer = '';
    for(var i = 0; i < my_strings.length; i++) {
        var res1 = parts[i][0];
        var res2 = parts[i][1];
        for(var j = res1; j <= res2; j++) {
            answer += my_strings[i][j];
        }
    }
    return answer;
}