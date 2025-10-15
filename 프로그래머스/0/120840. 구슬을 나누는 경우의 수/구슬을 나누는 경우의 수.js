function solution(balls, share) {
    var answer = 0;
    var n = 1;
    var m = 1;
    var nm = 1;
    var nminusm = balls - share;
    
    for(var i = balls; i > 0; i--) {
        n *= i;
    }
    for(var i = nminusm; i > 0; i--) {
        nm *= i;
    }
    for(var i = share; i > 0; i--) {
        m *= i;
    }
    answer = Math.round(n / (nm * m));
    return answer;
}