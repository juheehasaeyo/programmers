function solution(strArr) {
    var answer = 0;
    let count = {};

    for(var i = 0; i < strArr.length; i++) {
        var len = strArr[i].length;
        count[len] = (count[len] || 0) + 1;
        
        answer = Math.max(answer, count[len]);
    }
    return answer;
}
