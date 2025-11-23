function solution(n, m) {
    var answer = [];
    var gcd = 1; // 최대공약수
    
    // 최대공약수 구하기
    for (let i = 1; i <= Math.min(n, m); i++) {
        if (n % i === 0 && m % i === 0) {
            gcd = i;
        }
    }
    
    // 최소공배수 구하기
    var lcm = (n * m) / gcd;
    
    answer.push(gcd, lcm)
    return answer;
}