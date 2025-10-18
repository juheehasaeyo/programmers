function solution(dots) {
    var answer = 0;
    var xMax = Math.max(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
    var xMin = Math.min(dots[0][0], dots[1][0], dots[2][0], dots[3][0]);
    var yMax = Math.max(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
    var yMin = Math.min(dots[0][1], dots[1][1], dots[2][1], dots[3][1]);
    answer = (xMax-xMin) * (yMax-yMin);
    return answer;
}