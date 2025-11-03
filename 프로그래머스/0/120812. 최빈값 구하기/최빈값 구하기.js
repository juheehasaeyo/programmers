function solution(array) {
    var answer = 0;
    var maxCount = 0;
    
    for(let i = 0; i < array.length; i++) {
        var cnt = 0;
        for(let j = 0; j < array.length; j++) {
            if(array[i] === array[j]) {
                cnt += 1;
            }
        }
        if(cnt > maxCount) {
            maxCount = cnt;
            answer = array[i];
            cnt = 0;
        } else if(cnt === maxCount && array[i] !== answer) {
            answer = -1;
        }
    }
    return answer;
}