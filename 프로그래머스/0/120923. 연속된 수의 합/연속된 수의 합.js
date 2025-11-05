function solution(num, total) {
    let answer = [];
    // x부터 num개의 수의 합이 total이 되어야 함
    // x + (x+1) + (x+2) + ... + (x+(num-1)) = total
    // => num * x + (0 + 1 + 2 + ... + (num-1)) = total
    // 등차수열 합 공식 쓰면...
    // => num * x + (num * (num - 1)) / 2 = total
    // x = (total - (num * (num - 1)) / 2) / num
    const startNum = (total - (num * (num - 1)) / 2) / num;
    
    // x부터 num개 push하기
    for (let i = startNum; i < startNum + num; i++) {
        answer.push(i);
    }
    
    return answer;
}