function solution(n) {
    let cnt = 0;
    for(var i = 1; i <= n; i++) {
        if(n % i === 0) {
            cnt++;
        }
    }
    return cnt;
}