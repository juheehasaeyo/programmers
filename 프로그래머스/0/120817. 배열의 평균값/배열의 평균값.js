function solution(numbers) {
    var answer = 0, sum = 0;
    for(var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    answer = sum / numbers.length;
    return answer;
}