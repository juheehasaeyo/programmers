function solution(s) {
    var answer = '';
    s = s.split(' ')
    console.log(s)
    
    var max = -99999;
    var min = 99999;
    
    for (let i = 0; i < s.length; i++) {
        if(Number(s[i]) > max) {
            max = Number(s[i]);
        }
        if(Number(s[i] < min)) {
            min = Number(s[i]);
        }
    }
    answer = min + ' ' + max;

    return answer;
}