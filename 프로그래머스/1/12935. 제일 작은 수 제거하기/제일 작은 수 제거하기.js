function solution(arr) {
    var answer = [];
    var min = Infinity;
    if (arr.length === 1) return [-1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            answer.push(arr[i]);
        }
    }
    return answer;
}