function solution(num_list) {
    var answer = 0;
    var sum = 0;
    // 곱셈은 초기값을 1로!
    var multiply = 1;
    if(num_list.length >= 11) {
        for(var i = 0; i < num_list.length; i++) {
            sum += num_list[i];
        }
        answer = sum;
    } else if(num_list.length <= 10) {
        for(var i = 0; i < num_list.length; i++) {
            multiply *= num_list[i];
        }
        answer = multiply;
    }
    return answer;
}