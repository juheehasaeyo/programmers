function solution(arr1, arr2) {
    var answer = [[]];
    for(var i = 0; i < arr1.length; i++) {
        const arr = [];
        for(var j = 0; j < arr1[i].length; j++) {
            arr.push(arr1[i][j]+arr2[i][j]);
        }
        if (i === 0) {
            answer[0] = arr;
        } else {
            answer.push(arr);
        }
    }
    return answer;
}