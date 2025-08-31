function solution(price, money, count) {
    var answer = -1;
    var sum = 0;
    for(var i = 1; i <= count; i++) {
        sum += price * i;
    }
    answer = sum > money ? sum - money : 0;
    return answer;
}