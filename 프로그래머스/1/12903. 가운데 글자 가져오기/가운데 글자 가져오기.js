function solution(s) {
    var mid = Math.floor(s.length/2);
    if (s.length % 2 !== 0) {
        return s[mid];
    }
    return s[mid-1] + s[mid];
}