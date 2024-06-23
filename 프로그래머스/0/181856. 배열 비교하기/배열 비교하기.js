function solution(arr1, arr2) {
    var answer = 0;
    var sum1 = 0;
    var sum2 = 0;
    if(arr1.length == arr2.length) {
        for(var i = 0; i < arr1.length; i++) {
            sum1 += arr1[i];
        }
        for(var i = 0; i < arr2.length; i++) {
            sum2 += arr2[i];
        }
        if(sum1 > sum2) {
            answer = 1;
        } else if(sum1 < sum2) {
            answer = -1;
        } else {
            answer = 0;
        }
    } else if(arr1.length > arr2.length) {
        answer = 1;
    } else {
        answer = -1;
    }
    return answer;
}