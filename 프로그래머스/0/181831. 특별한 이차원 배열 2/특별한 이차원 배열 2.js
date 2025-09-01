function solution(arr) {
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    return 1;
}
