function solution(A, B) {
    var cnt = 0;
    var arrA = [];
    
    if (A === B) {
        return 0;
    }
    
    A = A.split('');
    
    for (let i = 0; i < A.length; i++) {        
        let a = A.pop();
        A.unshift(a);
        cnt += 1;
        arrA = A.join('');

        if (arrA === B) {
            break;
        }
    }
    if (arrA !== B) cnt = -1;

    return cnt;
}