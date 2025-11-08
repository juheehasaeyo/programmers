function solution(n, arr1, arr2) {
    var answer = [];
    var newArr1 = [];
    var newArr2 = [];
    
    // 숫자를 그대로 문자로 변환
    // 숫자.toString();
    
    // 10진수를 n진수로 변환
    // 10진수.toString(n)

    // 2진수를 10진수로 변환
    // 2진수.parseInt(bin, 2)

    // 16진수를 10진수로 변환
    // 16진수.parseInt(hex, 16)
    
    // 1. 주어진 arr1과 arr2를 이진수로 변환한다 - 앞뒤 빈 자리에 0을 채우고싶음..
    // n자리만큼 문자열 앞에 "x" 채워넣기 - 단, 숫자가 아니라 문자열에만 사용 가능!!!
    // const result = str.padStart(n, "x"); "7".padStart(3, "0") => "007"

    // 2. 길이가 n인 정사각형 배열로 나열한다?
    // 3. 1인 부분은 #, 0인 부분은 공백으로 만들어서 answer 배열에 push
    
    for (let i = 0; i < n; i ++) {
        newArr1.push(arr1[i].toString(2).padStart(n, '0'));
        newArr2.push(arr2[i].toString(2).padStart(n, '0'));
    }
    
    var newArr = [];
    
    for (let i = 0; i < n; i++) {
        let result = '';
        for (let j = 0; j < n; j++) {
            if(newArr1[i][j] === '0' && newArr2[i][j] === '0') {
                result += ' ';
            } else {
                result += '#';
            }
        }
        answer.push(result);
    }
    return answer;
}