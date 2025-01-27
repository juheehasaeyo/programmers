function solution(numbers) {
    var answer = [];
    for(var i = 0; i < numbers.length; i++) {
        answer.push(2 * numbers[i]);
    }
    return answer;
}