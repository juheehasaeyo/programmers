function solution(n) {
    let answer = [];
    let str = String(n);
    for(let i = str.length - 1; i >= 0; i--) {
        answer.push(Number(str[i]));
    }
    return answer;
}
