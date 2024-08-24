function solution(num_list) {
    var sumOdd = "";
    var sumEven = "";
    for(var i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 0) {
            sumEven += num_list[i].toString();
        } else {
            sumOdd += num_list[i].toString();
        }
    }
    return Number(sumOdd) + Number(sumEven);
}