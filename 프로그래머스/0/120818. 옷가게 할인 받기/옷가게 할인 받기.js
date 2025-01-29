function solution(price) {
    var answer = 0;
    if (price >= 500000) {
        answer = Math.floor(0.8 * price);
    } else if (price >= 300000) {
        answer = Math.floor(0.9 * price);
    } else if (price >= 100000) {
        answer = Math.floor(0.95 * price);
    } else {
        answer = price;
    }
    return answer;
}