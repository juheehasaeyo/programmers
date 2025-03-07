function solution(myString, pat) {
    var answer = 0;
    const my_str = myString.toLowerCase();
    const str_pat = pat.toLowerCase(); 
    if(my_str.includes(str_pat)) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}