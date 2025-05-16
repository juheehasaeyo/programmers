function solution(num, k) {
    num = num.toString();
    k = k.toString();

    for (var i = 0; i < num.length; i++) {
        if (num[i] == k) {
            return i+1;
        }
    }
    return -1;
}