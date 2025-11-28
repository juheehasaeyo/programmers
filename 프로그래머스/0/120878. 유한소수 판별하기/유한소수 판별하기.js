function solution(a, b) {
    var answer = 0;
    var gcd = 0;
    
    // 최대공약수 구하기
    for (var i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    var boonMo = b / gcd;
    
    // 2 또는 5로 나누어지는지 확인
     while (boonMo % 2 === 0) {
        boonMo /= 2;
    }
    
    while (boonMo % 5 === 0) {
        boonMo /= 5;
    }
    
    if (boonMo === 1) {
        answer = 1;
    } else {
        answer = 2;
    }
    
    return answer;
}