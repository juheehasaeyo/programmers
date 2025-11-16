function solution(n) {
    var answer = [];
    for(var i = 2; i <= n; i++) {
        if (n % i === 0) {
            let isPrime = true;
            for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) answer.push(i);
        }
    }
    return answer;
}