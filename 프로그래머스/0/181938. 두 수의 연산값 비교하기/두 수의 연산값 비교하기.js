function solution(a, b) {
    var res1 = Number(String(a) + String(b));
    var res2 = 2 * a * b;
    
    if (res1 >= res2) {
        return res1;
    } else {
        return res2;
    }
}