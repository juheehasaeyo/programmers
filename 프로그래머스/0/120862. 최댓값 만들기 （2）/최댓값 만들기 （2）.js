function solution(numbers) {
    // 오름차순 정렬
    numbers.sort((a, b) => a - b);
    const n = numbers.length;
    return Math.max(
        // 가장 작은 두 수의 곱(음수X음수 일수도)
        numbers[0] * numbers[1],
        // 가장 큰 두 수의 곱
        numbers[n - 1] * numbers[n - 2]
    );
}