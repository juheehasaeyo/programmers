function solution(numlist, n) {
    var answer = [];

    numlist.sort((a, b) => {
        // 거리 같으면 큰 수 먼저
        if (Math.abs(a - n) === Math.abs(b - n)) {
            return b - a;
        }
        return Math.abs(a - n) - Math.abs(b - n); // 가까운 순
    });

    answer.push(...numlist);
    return answer;
}