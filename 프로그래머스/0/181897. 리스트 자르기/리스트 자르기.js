function solution(n, slicer, num_list) {
    var answer = [];
    const a = slicer[0];
    const b = slicer[1];
    const c = slicer[2];
    if(n == 1) {
        for(var i = 0; i <= b; i++) {
            answer.push(num_list[i]);
        }
    } else if(n == 2) {
        for(var i = a; i < num_list.length; i++) {
            answer.push(num_list[i]);
        }
    } else if(n == 3) {
        for(var i = a; i <= b; i++) {
            answer.push(num_list[i]);
        }
    } else if(n == 4) {
        for(var i = a; i <= b; i += c) {
            answer.push(num_list[i]);
        }
    }
    return answer;
}