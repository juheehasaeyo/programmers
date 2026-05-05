function solution(s) {
    const answer = [];
    
    for (let i = 0; i < s.length; i++) {
        let same = false;
        
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                answer.push(i - j);
                same = true;
                break;
            }
        }        
        if (!same) answer.push(-1);
    } 
    return answer;
}