function solution(number) {
    var sum = 0;
    for(var i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    var answer = sum % 9;
    return answer;
}