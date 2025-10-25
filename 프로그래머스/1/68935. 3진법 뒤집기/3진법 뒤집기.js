function solution(n) {
    var answer = 0;
    n = n.toString(3); // 3진법 변환
    var arr = [];
    for(let i = n.length - 1; i >= 0; i--) {
        arr.push(n[i]);
    }
    arr = arr.join('');
    answer = parseInt(arr, 3);
    return answer;
}