function solution(s) {
    const mid = Math.floor(s.length/2);
    if(s.length % 2 == 0) {
        return s[mid-1] + s[mid];
    } else {
        return s[mid];
    }
}