function solution(num_list) {
    for(var i = num_list.length - 1; i > 0; i--) {
        if(num_list[i] > num_list[i - 1]) {
            num_list.push(num_list[i] - num_list[i - 1]);
            break;
        } else {
            num_list.push(num_list[i] * 2);
            break;
        }
    }
    return num_list;
}
