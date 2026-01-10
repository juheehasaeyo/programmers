function solution(code) {
    var ret = '';
    var mode = 0;
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            if (mode === 1) {
                mode = 0;
            } else if (mode === 0) {
                mode = 1;
            }
        }
        if (mode === 0) {
            if(code[i] !== '1') {
                if (i % 2 === 0) {
                    ret += code[i];
                }
            }
            if (code[i] === 1) {
                mode = 1;
            }
        } else if (mode === 1) {
            if (code[i] !== '1') {
                if (i % 2 !== 0) {
                    ret += code[i];
                }
            }
            if (code[i] === 1) {
                mode = 0;
            }
        }
    }
    if (ret === '') {
        ret = 'EMPTY';
    }
    return ret;
}