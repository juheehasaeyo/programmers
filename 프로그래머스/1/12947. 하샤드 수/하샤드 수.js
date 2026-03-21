function solution(x) {
    var answer = true;
    var strX = String(x);
    var sum = 0;
    
    for (let i = 0; i < strX.length; i++) {
        sum += Number(strX[i]);
    }
    x % sum === 0 ? answer = true : answer = false;
    
    return answer;
}