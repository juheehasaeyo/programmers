function solution(arr, intervals) {
    var answer = [];
    for(var i = 0; i < intervals.length; i++) {
        var start = intervals[i][0];
        var end = intervals[i][1];
        for (var j = start; j <= end; j++) {
            answer.push(arr[j]);
        }
    }
    return answer;
}
