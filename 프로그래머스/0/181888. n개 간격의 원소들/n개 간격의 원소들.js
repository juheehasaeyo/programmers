function solution(num_list, n) {
    var answer = [];
    for(var i = 0; i < num_list.length; i += n) {
        answer.push(num_list[i]);
    }
    return answer;
}