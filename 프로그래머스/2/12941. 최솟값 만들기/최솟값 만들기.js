function solution(A,B){
    var answer = 0;

    // 아이디어 : 작은 수는 큰 수랑 곱하기
    // 1. A를 오름차순으로 정렬
    // 2. B를 내림차순으로 정렬
    // 3. 같은 인덱스끼리 곱해서 전부 더하기

    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}