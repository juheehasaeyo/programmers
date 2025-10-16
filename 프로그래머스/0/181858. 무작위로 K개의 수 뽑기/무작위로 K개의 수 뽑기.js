function solution(arr, k) {
    var answer = [];
    for(var i = 0; i < arr.length; i++) {
        if(!answer.includes(arr[i])) {
            answer.push(arr[i]);
        }
    }
    if(answer.length > k) {
        while(answer.length !== k) {
            answer.pop();
        }
    } else if(answer.length < k) {
        while(answer.length !== k) {
            answer.push(-1);
        }
    }
    return answer;
}