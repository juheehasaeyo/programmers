function solution(i, j, k) {
    let answer = 0;
    for(var p = i; p <= j; p++) {
        for(let ch of String(p)) {
            if(ch === String(k)) {
                answer += 1;
            }
        }
    }
    return answer;
}