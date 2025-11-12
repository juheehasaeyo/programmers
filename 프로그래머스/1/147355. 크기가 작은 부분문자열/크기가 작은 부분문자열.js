function solution(t, p) {
    var cnt = 0;
    var pLength = p.length;
    var answer = [];
    
    for (let i = 0; i <= t.length - p.length; i++) {
        answer.push(t.slice(i, i + pLength));
        if(Number(answer[i]) <= Number(p)) {
            cnt += 1;
        }
    }
    return cnt;
}