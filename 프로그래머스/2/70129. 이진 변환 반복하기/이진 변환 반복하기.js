
function solution(s) {
    var answer = [];
    var cnt = 0; // 이진변환의 횟수
    var removedZero = 0; // 제거된 모든 0의 개수
    
    s = s.split('');
    
    while (true) {
        let arr = [];
        for (let i = 0; i < s.length; i++) {
            if(s[i] === '1') {
                arr.push(s[i]);
            } else if (s[i] === '0') {
                removedZero += 1;
            }
        }
        var c = arr.length;
        c = c.toString(2); // c를 2진법으로 변환
        
        s = c;
        cnt += 1;
        if (c === '1') break;       
    }
    answer.push(cnt, removedZero)
    return answer;
}