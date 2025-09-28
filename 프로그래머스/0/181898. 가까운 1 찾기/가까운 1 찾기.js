function solution(arr, idx) {
    var answer = -1;
    for(var i = 0; i < arr.length; i++) {
        if(i >= idx && arr[i] == 1) {
            answer = i;
            break;
        } else {
            answer = -1;
        }
    }
    return answer;
}