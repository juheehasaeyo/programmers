function solution(arr) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 50 && arr[i] % 2 == 0) {
            answer[i] = arr[i] / 2;
        } else if(arr[i] < 50 && arr[i] % 2 != 0) {
            answer[i]  = arr[i] * 2;
        } else {
            answer[i]  = arr[i];
        }
    }
    return answer;
}