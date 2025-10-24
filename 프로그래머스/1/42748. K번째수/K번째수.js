function solution(array, commands) {
    var answer = [];
    var realAnswer = [];
    
    for(let i = 0; i < commands.length; i++) {
        for(let j = commands[i][0]; j <= commands[i][1]; j++) {
            answer.push(array[j-1]);
        }
        answer.sort((a, b) => a - b);
        var k = commands[i][2];
        realAnswer.push(answer[k-1]);
        answer = [];
    }
    return realAnswer;
}