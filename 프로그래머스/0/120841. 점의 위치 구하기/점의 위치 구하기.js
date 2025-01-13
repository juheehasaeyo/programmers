function solution(dot) {
    var answer = 0;
    if(dot[0] < 0) {
        if(dot[1] < 0) {
            answer = 3;
        } else {
            answer = 2;
        }
    } else {
        if(dot[1] < 0) {
            answer = 4;
        } else {
            answer = 1;
        }
    }
    return answer;
}