function solution(n) {
    var str = String(n);
    var arr = [];
    for(var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }
    arr.sort((a, b) => b - a);

    var result = '';
    for(var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return Number(result);
}