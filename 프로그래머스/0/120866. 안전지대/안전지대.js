function solution(board) {
    var cnt = 0;
    var n = board.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                if (i !== 0 && j !== 0 && board[i - 1][j - 1] === 0) {
                    board[i - 1][j - 1] = 2;
                }
                if (i !== 0 && board[i - 1][j] === 0) {
                    board[i - 1][j] = 2;
                }
                if (i !== 0 && j !== board.length - 1 && board[i - 1][j + 1] === 0) {
                    board[i - 1][j + 1] = 2;
                }
                if (j !== 0 && board[i][j - 1] === 0) {
                    board[i][j - 1] = 2;
                }
                if (j !== board.length - 1 && board[i][j + 1] === 0) {
                    board[i][j + 1] = 2;
                }
                if (i !== board.length - 1 && j !== 0 && board[i + 1][j - 1] === 0) {
                    board[i + 1][j - 1] = 2;
                }
                if (i !== board.length - 1 && board[i + 1][j] === 0) {
                    board[i + 1][j] = 2;
                }
                if (i !== board.length - 1 && j !== board.length - 1 && board[i + 1][j + 1] === 0) {
                    board[i + 1][j + 1] = 2;
                }
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                cnt += 1;
            }
        }
    }
    
    return cnt;
}