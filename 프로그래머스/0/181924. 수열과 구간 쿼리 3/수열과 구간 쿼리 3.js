function solution(arr, queries) {
    for (let k = 0; k < queries.length; k++) {
        var i = queries[k][0];
        var j = queries[k][1];

        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}