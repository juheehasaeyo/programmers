function solution(my_string) {
    var answer = 0;
    my_string = my_string.split(' ');
    
    var firstNum = Number(my_string[0]);
    answer = firstNum; // 첫 숫자로 초기화
    
    for (let i = 1; i < my_string.length; i += 2) {
        let op = my_string[i]; // + 또는 -
        let num = Number(my_string[i+1]); // 다음 숫자

        if (op === '+') {
            answer += num;
        } else if (op === '-') {
            answer -= num;
        }
    }
    
    return answer;
}