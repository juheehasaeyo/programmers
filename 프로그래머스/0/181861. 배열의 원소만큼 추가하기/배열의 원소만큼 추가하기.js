function solution(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i]; j++) {
            answer.push(arr[i]);
        }
    }
    return answer;
}