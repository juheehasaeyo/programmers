function solution(str_list) {
    var answer = [];
    for(var i = 0; i < str_list.length; i++) {
        if(str_list[i] == 'l') {
            for (var j = 0; j < i; j++) {
                answer.push(str_list[j]);
            }
            break;
        } else if(str_list[i] == 'r') {
            for (var j = i+1; j < str_list.length; j++) {
                answer.push(str_list[j]);
            }
            break;
        }
    }
    return answer;
}