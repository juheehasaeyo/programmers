function solution(s){
    var cntP = 0;
    var cntY = 0;
    s = s.toLowerCase('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            cntP += 1;
        } if (s[i] === 'y') {
            cntY += 1;
        }
    }
    if (cntP === cntY) {
        return true;
    } else {
        return false;
    }
}