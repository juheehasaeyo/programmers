function solution(arr) {
    while(!Number.isInteger(Math.log2(arr.length))) {
        arr.push(0);
    }
    return arr;
}