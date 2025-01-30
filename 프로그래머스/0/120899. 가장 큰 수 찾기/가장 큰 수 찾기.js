function solution(array) {
    let maxNum = Math.max(...array);
    let idx = array.indexOf(maxNum);
    return [maxNum, idx];
}