function solution(sizes) {
    var answer = 0;
    var garo = 0; 
    var sero = 0;
    
    for (let i = 0; i < sizes.length; i++) {
        // 큰 값을 가로, 작은 값을 세로로 맞추기
        const w = Math.max(sizes[i][0], sizes[i][1]);
        const h = Math.min(sizes[i][0], sizes[i][1]);

        garo = Math.max(garo, w);
        sero = Math.max(sero, h);
    }

    answer = garo * sero;
    return answer;
}