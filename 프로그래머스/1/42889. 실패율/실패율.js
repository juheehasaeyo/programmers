function solution(N, stages) {
    var answer = [];
    var index = [];
    var failureRatio = 1;
    var boonzaCnt = 0; // 분자
    var boonmoCnt = 0; // 분모
    
    for(let i = 1; i <= N; i++) {
        boonzaCnt = 0;
        boonmoCnt = 0;
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] === i) {
                boonzaCnt += 1;
            }
            if(stages[j] >= i) {
                boonmoCnt += 1;
            }
        }
        if(boonzaCnt === 0 && boonmoCnt === 0) {
            failureRatio = 0;
        } else {
            failureRatio = boonzaCnt / boonmoCnt;
        }

        answer.push(failureRatio)
        index.push(i);
    }
    console.log(index)
    console.log(answer)

    index.sort((a, b) => {
        if(answer[b-1] > answer[a-1]) { // answer[b]가 answer[a]보다 크면 b가 a보다 앞에
            return 1;
        } else if(answer[b-1] === answer[a-1]) {
            return a - b;
        } else {  // a가 b보다 앞에
            return -1;
        }
    })
    
    return index;
}