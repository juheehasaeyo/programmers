function solution(x) {
    var cnt = 0;
    const strX = String(x);
    for(var i = 0; i < strX.length; i++) {
        cnt += Number(strX[i]);
    }
    if(x % cnt == 0) {
        return true;
    } else {
        return false;
    }
}