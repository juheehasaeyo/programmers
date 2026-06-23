function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            answer.push(arr[i]);
        }
    }
    return answer;
}