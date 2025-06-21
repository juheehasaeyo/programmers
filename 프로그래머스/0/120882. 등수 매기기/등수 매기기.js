function solution(score) {
    var answer = [];
    var average = [];
    for(var i = 0; i < score.length; i++) {
        average.push((score[i][0] + score[i][1]) / 2);
    }
    for(var i = 0; i < average.length; i++) {
        let rank = 1;
        for(var j = 0; j < average.length; j++) {
            if(average[j] > average[i]) {
                rank += 1;
            }
        }
        answer.push(rank);
    }
    return answer;
}