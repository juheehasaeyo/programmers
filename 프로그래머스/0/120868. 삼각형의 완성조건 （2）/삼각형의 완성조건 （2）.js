function solution(sides) {
    var cnt = 0;
    var max = Math.max(...sides);
    var min = Math.min(...sides);
    
    for (let i = 1; i < min + max; i++) {
        if(i > max - min) {
            cnt++;
        }
    }
    return cnt;
}