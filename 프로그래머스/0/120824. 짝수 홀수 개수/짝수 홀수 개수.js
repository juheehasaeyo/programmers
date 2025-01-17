function solution(num_list) {
    var answer = [];
    let ans1 = 0;
    let ans2 = 0;
    for(var i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 == 0) {
            ans1++;
        } else {
            ans2++;
        }
    }
    answer.push(ans1, ans2);
    return answer;
}