function solution(my_string) {
    var answer = 0;
    var str = '';
    for(var i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            str += my_string[i];
        } else {
            if(str) {
                answer += Number(str);
                str = ''; // 숫자 누적 초기화
            }
        }
    }
    // 마지막 숫자 처리
    if (str) answer += Number(str);
    
    return answer;
}