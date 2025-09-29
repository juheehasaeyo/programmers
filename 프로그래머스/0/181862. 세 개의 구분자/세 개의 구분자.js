function solution(myStr) {
    var answer = [];
    var str = '';

    for(var i = 0; i < myStr.length; i++) {
        if (myStr[i] !== 'a' && myStr[i] !== 'b' && myStr[i] !== 'c') {
            str += myStr[i];
        } else {
            if(str !== '') {
                answer.push(str);
                str = '';
            }
        }
    }
    if (str !== '') {
        answer.push(str);
    }

    return answer.length > 0 ? answer : ["EMPTY"];
}