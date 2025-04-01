function solution(arr) {
    var answer = [];
     if(arr.length == 1) {
        return [-1];
    }
    let min = Math.min(...arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            answer.push(arr[i]);
        }
    }
        return answer;
}