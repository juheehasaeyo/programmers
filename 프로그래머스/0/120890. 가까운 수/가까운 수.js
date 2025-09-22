function solution(array, n) {
    var answer = array[0];
    var distance = Math.abs(n - array[0]);
    for(var i = 1; i < array.length; i++) {
        const min = Math.abs(n - array[i]);
        if(min < distance) {
            distance = min;
            answer = array[i];
        } else if(min === distance) {
            answer = Math.min(answer, array[i]);
        }
    }
    return answer;
}