function solution(str1, str2) {
    var answer = '';
    for(var i = 0; i < str1.length; i++) {
        answer += str1[i] + str2[i];
    }
    return answer;
}