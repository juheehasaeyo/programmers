function solution(s){
    var answer = true;
    var arr = [];
    var cnt1 = 0;
    var cnt2 = 0;
    s = s.toLowerCase();
    arr = s.split('');

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'p') cnt1 +=1;
        if(arr[i] === 'y') cnt2 +=1;
    }
    cnt1 === cnt2 ? answer = true : answer = false;
    return answer;
}