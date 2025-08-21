function solution(arr, flag) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
        if(flag[i] == true) {
            for (var j = 0; j < arr[i]*2; j++) {
                answer.push(arr[i]);
            }
        } else {
            for(var j = 0; j < arr[i]; j++) {
                answer.pop();
            }
        }
    }
    return answer;
}