function solution(age) {
    var answer = "";
    var ageStr = String(age);

    for(var i = 0; i < ageStr.length; i++) {
        var digit = Number(ageStr[i]);
        var char = String.fromCharCode(97 + digit);
        answer += char;
    }

    return answer;
}