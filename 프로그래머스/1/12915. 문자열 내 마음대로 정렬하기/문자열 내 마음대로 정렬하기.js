function solution(strings, n) {
    var answer = [];
    
    // 1. n번째 인덱스를 비교해서 strings 배열 정렬
    // 2. n번째 인덱스가 같으면 문자열 전체 비교
    
    strings.sort((a, b)=> {
        if(a[n] > b[n]) {
            return 1;;
        } else if(a[n] < b[n]) {
            return -1;
        } else { // 2
            if(a > b) {
                return 1;
            } else if(a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    
    answer = strings;
    return answer;
}