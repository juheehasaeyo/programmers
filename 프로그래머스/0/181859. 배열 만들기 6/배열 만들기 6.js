function solution(arr) {
    var stk = [];
    for(var i = 0; i < arr.length; i++) {
        if(stk.length == 0) {
            stk.push(arr[i]);
        } else if(stk[stk.length -1] == arr[i]) {
            stk.pop();
        } else {
            stk.push(arr[i]);
        }
    }
    if(stk.length == 0) {
            stk.push(-1);
    }
    return stk;
}