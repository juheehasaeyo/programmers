function solution(a, b, n) {
    var answer = 0;

    while (n >= a) {
        // 이번에 교환으로 받는 콜라 수
        let cola = Math.floor(n / a) * b;

        answer += cola;

        // 빈 병 갱신
        n = (n % a) + cola;
    }
    return answer;
}
