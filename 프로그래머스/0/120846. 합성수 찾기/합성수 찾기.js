function solution(n) {
    var cnt = 0;

    for (let i = 2; i <= n; i++) {
        var divisors = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                divisors += 1;
            }
        }
        
        if (divisors >= 3) {
            cnt += 1;
        }
    }
    return cnt;
}
