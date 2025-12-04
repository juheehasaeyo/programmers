const alphabet = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M',
  'N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z'
];

function solution(my_string) {
    let answer = [];
    let count = 0;
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < my_string.length; j++) {
            if (my_string[j] === alphabet[i]) {
                count += 1;
            }
        }
        answer.push(count);
        count = 0;
    }
    return answer;
}