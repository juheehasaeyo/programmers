function solution(rank, attendance) {
    var answer = [];
    for(var i = 1; i <= rank.length; i++) {
        const index = rank.indexOf(i);
        if(attendance[index] == true) {
            answer.push(index);
            if(answer.length == 3) {
                break;
            }
        }
    }
    var a = answer[0];
    var b = answer[1];
    var c = answer[2];
    return 10000 * a + 100 * b + c;
}