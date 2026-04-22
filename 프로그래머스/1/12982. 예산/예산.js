function solution(d, budget) {
    var cnt = 0;
    var sum = 0;
    
    d.sort((a, b) => a - b);
    
    for (let i = 0; i < d.length; i++) {
        if (sum + d[i] > budget) {
            break;
        }
        sum += d[i];
        cnt += 1;
    }
    
    return cnt;
}