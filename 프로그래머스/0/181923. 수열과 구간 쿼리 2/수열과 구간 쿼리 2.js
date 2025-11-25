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
        answer.push(min === Infinity ? -1 : min)
    }
    return answer;
}