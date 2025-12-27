function solution(quiz) {
    var answer = [];

    for (let i = 0; i < quiz.length; i++) {
        var arr = quiz[i].split(' ');

        const a = Number(arr[0]);
        const op = arr[1];
        const b = Number(arr[2]);
        const c = Number(arr[4]);

        let result = 0;

        if (op === '+') {
            result = a + b;
        } else {
            result = a - b;
        }
        answer.push(result === c ? "O" : "X");
    }
    return answer;
}
