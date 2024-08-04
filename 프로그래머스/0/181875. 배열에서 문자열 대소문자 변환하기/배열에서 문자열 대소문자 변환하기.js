function solution(strArr) {
    var arr = [];
    for(var i = 0; i < strArr.length; i++) {
        if(i % 2 == 0) {
            arr[i] = strArr[i].toLowerCase();
        } else {
            arr[i] = strArr[i].toUpperCase();
        }
    }
    return arr;
}