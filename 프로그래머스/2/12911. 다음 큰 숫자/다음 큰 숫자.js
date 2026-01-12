function solution(n) {
    var answer = 0;

    // n의 1의 개수 구하기
    var twoN = n.toString(2);
    var cnt = 0;

    for (let i = 0; i < twoN.length; i++) {
        if (twoN[i] === '1') {
            cnt += 1;
        }
    }

    // n보다 큰 수를 하나씩 증가시키며 비교
    var next = n + 1;

    while (true) {
        var twoNext = next.toString(2);
        var nextCnt = 0;

        for (let i = 0; i < twoNext.length; i++) {
            if (twoNext[i] === '1') {
                nextCnt += 1;
            }
        }

        // 1의 개수가 같으면 반복문 빠져나오기
        if (nextCnt === cnt) {
            answer = next;
            break;
        }
        next++;
    }
    return answer;
}