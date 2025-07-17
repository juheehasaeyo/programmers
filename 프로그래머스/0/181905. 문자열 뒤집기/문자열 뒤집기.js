function solution(my_string, s, e) {
    var answer = '';
    const front = my_string.slice(0,s);
    const middle = my_string.slice(s,e+1).split('').reverse().join('');
    const last = my_string.slice(e+1, my_string.length);
    answer = front + middle + last;
    return answer;
}