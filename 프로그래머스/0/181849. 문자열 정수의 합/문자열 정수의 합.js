function solution(num_str) {
    var sum = 0;
    const num_arr = num_str.split('');
    for(var i = 0; i<num_arr.length; i++) {
        sum += Number(num_arr[i]);
    }
    return sum;
}