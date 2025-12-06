function solution(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        
        // 스택의 맨 위 문자와 지금 문자가 같으면 -> 짝이니까 제거(pop)
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop();      // 짝이면 제거
        } else {
            stack.push(ch);   // 아니면 쌓기
        }
    }

    return stack.length === 0 ? 1 : 0;
}
