function solution(array) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        const str = array[i].toString();
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '7') {
                answer++;
            }
        }
    }
    return answer;
}