function solution(s) {
    var answer = '';
    var arr = s.split(' ').map(Number);
    var min = Infinity;
    var max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    answer = min + ' ' + max;
    return answer;
}