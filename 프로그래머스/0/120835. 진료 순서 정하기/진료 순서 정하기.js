function solution(emergency) {
    var answer = [];
    for(var i = 0; i < emergency.length; i++) {
        let rank = 1;
        for (let j = 0; j < emergency.length; j++) {
        if (emergency[i] < emergency[j]) {
            rank++;
        }
    }
        answer[i] = rank;
    }
    return answer;
}