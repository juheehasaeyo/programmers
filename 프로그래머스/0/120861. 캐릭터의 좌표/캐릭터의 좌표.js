function solution(keyinput, board) {
    var x = 0;
    var y = 0;
    var answer = [];
    var xLimit = (board[0] - 1) / 2;
    var yLimit = (board[1] - 1) / 2;
    
    for(var i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === 'left') {
            if(x - 1 < -xLimit) {
                continue;
            } else {
                x -= 1;
            }
        }  
        if(keyinput[i] === 'right') {
            if(x + 1 > xLimit) {
                continue;
            } else {
                x += 1;
            }
        }
        if(keyinput[i] === 'up') {
            if(y + 1 > yLimit) {
                continue;
            } else {
                y += 1;
            }
        }  
        if(keyinput[i] === 'down') {
            if(y - 1 < -yLimit) {
                continue;
            } else {
                y -= 1;
            }
        }
    }
    
    answer[0] = x;
    answer[1] = y;
    
    return answer;
}