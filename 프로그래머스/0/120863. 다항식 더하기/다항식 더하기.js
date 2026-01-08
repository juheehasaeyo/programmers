function solution(polynomial) {
    let xSum = 0;
    let numSum = 0;

    const terms = polynomial.split(' + ');

    for (let i = 0; i < terms.length; i++) {
        if (terms[i].includes('x')) {
            if (terms[i] === 'x') {
                xSum += 1;
            } else {
                xSum += Number(terms[i].replace('x', ''));
            }
        } else {
            numSum += Number(terms[i]);
        }
    }

    let result = '';

    if (xSum > 0) {
        result += (xSum === 1 ? 'x' : xSum + 'x');
    }

    if (numSum > 0) {
        if (result !== '') result += ' + ';
        result += numSum;
    }

    return result;
}