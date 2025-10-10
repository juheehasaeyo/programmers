function solution(arr) {
    var answer = [];
    const first = arr.indexOf(2);
    const last = arr.lastIndexOf(2);

    if (first === -1) {
        answer.push(-1);
    } else {
        answer = arr.slice(first, last + 1);
    }

    return answer;
}