function solution(myString, pat) {
    var answer = 0;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase(); 
    if(myString.includes(pat)) {
        answer = 1;
    } else {
        answer = 0;
    }
    return answer;
}