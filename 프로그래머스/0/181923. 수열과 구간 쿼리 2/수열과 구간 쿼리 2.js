function solution(arr, queries) {
    var answer = [];
    
    for(var i = 0; i < queries.length; i++) {
        var s = queries[i][0];
        var e = queries[i][1];
        var k = queries[i][2];
        
        let min = Infinity;
        
        for(var j = s; j <= e; j++) {
            if (arr[j] > k && arr[j] < min) {
                min = arr[j];
            }
        }
        if (min === Infinity) {
            answer.push(-1);
        } else {
            answer.push(min)
        }
    }
    return answer;
}