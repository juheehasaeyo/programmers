function solution(num_list) {
    var multifly = 1;
    var sum = 0;
    
    for(var i=0; i<num_list.length; i++) {
        multifly *= num_list[i];
        sum += num_list[i];
    }
    
    if (multifly <= sum * sum) {
        return 1;
    }
    else {
        return 0;
    }
    
    return answer;
}