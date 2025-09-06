function getDistance (x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

function solution(places) {
    var answer = [];
    
    for (let i = 0; i < places.length; i++) {
        let place = places[i];
        let sitPos = [];
        
        for (let j = 0; j < place.length; j++) {
            for (let k = 0; k < place[j].length; k++) {
                if (place[j][k] === "P") {
                    sitPos.push([j, k]);
                }
            }
        }
        
        let flag = true;
        
        for (let j = 0; j < sitPos.length - 1; j++) {
            let curSitPos = sitPos[j];
            for (let k = j + 1; k < sitPos.length; k++) {
                let dist = getDistance(curSitPos[0], curSitPos[1], sitPos[k][0], sitPos[k][1]);
                if (dist === 1) {
                    flag = false; // 무조건 붙어있으므로 실패
                } else if (dist === 2) {
                    if (curSitPos[0] === sitPos[k][0]) { // 같은 가로 선상에 있으면
                        if (place[curSitPos[0]][(curSitPos[1] + sitPos[k][1]) / 2] !== "X") { // 둘 세로 사이에 가림막이 없으면
                            flag = false; // 실패
                        }
                    } else if (curSitPos[1] === sitPos[k][1]) { // y 좌표가 같으면
                        if (place[(curSitPos[0] + sitPos[k][0]) / 2][curSitPos[1]] !== "X") { // 둘 가로 사이에 가림막이 없으면
                            flag = false; // 실패
                        }
                    } else { // 대각선
                        if (place[curSitPos[0]][sitPos[k][1]] !== "X" || place[sitPos[k][0]][curSitPos[1]] !== "X") { // X, Y 좌표 교차시킨 곳에 가림막이 없으면
                            flag = false; // 실패
                        }
                    }
                }
            }
        }
        
        if (flag === false) {
            answer.push(0);
        } else {
            answer.push(1)
        }
    }
    
    return answer;
}