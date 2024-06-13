function solution(a, b) {    
    res1 = Number(String(a) + String(b));
    res2 = Number(String(b) + String(a));
    if (res1 >= res2) {
        return res1;
    }
    else {
        return res2;
    }
}