function solution(n) {
    var sum = 0;
    for(var i = 0; i <= n; i+=2) {
        sum += i;
    }
    return sum;
}