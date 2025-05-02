function solution(myString, pat) {
    let str = '';
    for (let i = 0; i < myString.length; i++) {
        str += myString[i] === 'A' ? 'B' : 'A';
    }

    return str.includes(pat) ? 1 : 0;
}