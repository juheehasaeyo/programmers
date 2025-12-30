function solution(picture, k) {
    var answer = [];
    for(let i = 0; i < picture.length; i++) {
        let stretchedRow = "";
        
        // 가로로 k배 늘리기
        for (let c = 0; c < picture[i].length; c++) {
            stretchedRow += picture[i][c].repeat(k);
        }
        
        // 세로로 k배 늘리기
        for(let j = 0; j < k; j++) {
            answer.push(stretchedRow);
        } 
    }
    return answer;
}