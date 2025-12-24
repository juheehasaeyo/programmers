function solution(l, r) {
    var answer = [];

    for (let i = l; i <= r; i++) {
        var str = String(i); 
        
        for (let j = 0; j < str.length; j++) {
            var isValid = true;
            if (str[j] !== '0' && str[j] !== '5') {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            answer.push(i);
        }
    }

    return answer.length ? answer : [-1];
}