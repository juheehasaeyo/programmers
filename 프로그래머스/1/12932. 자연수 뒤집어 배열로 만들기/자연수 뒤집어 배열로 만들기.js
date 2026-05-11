function solution(n) {
    var answer = [];
    n = String(n);
    n = n.split('');

    for (let i = n.length - 1; i >= 0; i--) {
        answer.push(Number(n[i]));
    }
    
    return answer;
}