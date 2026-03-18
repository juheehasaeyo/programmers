function solution(common) {
    var answer = 0;
    for (let i = 0; i < common.length; i++) {
        var minus = common[i+1] - common[i];
        var ratio = common[i+1] / common[i];
        if (minus === common[i+2] - common[i+1]) {
            answer = common[common.length-1] + minus;
        }
        else if (common[i+1] * ratio === common[i+2]) {
            answer = common[common.length-1] * ratio;
        }
    }
    return answer;
}