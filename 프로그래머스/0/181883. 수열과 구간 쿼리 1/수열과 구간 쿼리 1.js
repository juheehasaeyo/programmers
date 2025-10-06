function solution(arr, queries) {
    
    for(var i = 0; i < queries.length; i++) {
        var s = queries[i][0];
        var e = queries[i][1];
        for(var j = s; j <= e; j++) {
            arr[j] += 1;
        }
    }
    return arr;
}