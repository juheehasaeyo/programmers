function solution(array, commands) {
    var answer = [];
    for (let n = 0; n < commands.length; n++) {
        var i = commands[n][0];
        var j = commands[n][1];
        var k = commands[n][2];
        
        var arr = [];
        
        for (let m = i - 1; m < j; m++) {
            arr.push(array[m]);
        }
        arr.sort((a, b) => a - b);
        answer.push(arr[k-1])      
    }
    
    return answer;
}