function solution(phone_number) {
    var answer = '';
    for (let i = phone_number.length; i > 4; i--) {
        answer += '*';
    }
    answer += phone_number.slice(-4);
    return answer;
}