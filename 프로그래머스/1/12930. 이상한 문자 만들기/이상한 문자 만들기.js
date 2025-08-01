function solution(s) {
    var answer = '';
    var str = s.split(' ');
    for(var i = 0; i < str.length; i++) {
        for(var j = 0; j < str[i].length; j++) {
            if(j % 2 == 0) {
                answer += str[i][j].toUpperCase();
            } else {
                answer += str[i][j].toLowerCase();
            }
        }
        // 마지막 단어가 아니면 공백 추가
        if (i < str.length - 1) {
            answer += ' ';
        }
    }
    return answer;
}