function solution(myString) {
    var answer = [];
    var str = myString.split('x');
    for(var i = 0; i < str.length; i++) {
        answer.push(str[i].length);    
    }
    return answer;
}