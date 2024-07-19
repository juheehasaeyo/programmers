function solution(n) {
    let x = Math.sqrt(n);
    if(n % x*x == 0) {
        return (x+1)*(x+1);
    } else {
        return -1;
    }
}