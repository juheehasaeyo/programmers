function solution(array) {
    array.sort((a, b) => a - b);
    const index = parseInt(array.length / 2);
    return array[index];
}