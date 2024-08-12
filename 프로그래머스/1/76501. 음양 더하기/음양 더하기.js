function solution(absolutes, signs) {
    var sum = 0;
    for(var i = 0; i < signs.length; i++) {
        if(signs[i] == false) {
            absolutes[i] = absolutes[i] * -1;
        }
        sum += absolutes[i];
    }
    return sum;
}