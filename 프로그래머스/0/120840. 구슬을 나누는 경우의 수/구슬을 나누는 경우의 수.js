function factorial(n) {
    if (n === 0) {
        return 0;
    }
    
    if (n === 1) {
        return 1;
    }
    
    return factorial (n - 1) * n;
}

function solution(balls, share) {
    if (balls - share === 0) {
        return 1;
    }
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)))
}