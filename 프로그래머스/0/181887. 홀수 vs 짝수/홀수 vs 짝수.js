function solution(num_list) {
    var answer = 0;
    var evenSum = 0;
    var oddSum = 0;
    for(var i = 0; i < num_list.length; i++) {
        if(i % 2 == 0) {
            evenSum += num_list[i];
        } else {
            oddSum += num_list[i];
        }
    }
    if(evenSum >= oddSum) {
        answer = evenSum;
    } else {
        answer = oddSum;
    }
    return answer;
}