function getDistance (x1, y1, x2, y2) {
    return Math.abs(x2 - x1) + Math.abs(y2 - y1);
}

let phone = [[1,2,3], [4, 5, 6], [7, 8, 9], ["*", 0, "#"]]

function getPos (number) { 
    for (let x = 0; x < phone.length; x++) {
        for (let y = 0; y < phone[x].length; y++) {
            if (phone[x][y] === number) {
                return {x, y};
            }
        }
    }
}

function solution(numbers, hand) {
    var answer = '';
    

    
    let leftNum = [1, 4, 7];
    let rightNum = [3, 6, 9];
    
    let leftCur = "*"
    let rightCur = "#"
    
    for (let i = 0; i < numbers.length; i++) {
        if (leftNum.includes(numbers[i])) {
            leftCur = numbers[i];
            answer += "L"
        } else if (rightNum.includes(numbers[i])) {
            rightCur = numbers[i]
            answer += "R"
        } else {
            let numberXPos = getPos(numbers[i]).x
            let numberYPos = getPos(numbers[i]).y
            
            if (getDistance(numberXPos, numberYPos, getPos(leftCur).x, getPos(leftCur).y) === getDistance(numberXPos, numberYPos, getPos(rightCur).x, getPos(rightCur).y)) {
                if (hand === "left") {
                    answer += "L";
                    leftCur = numbers[i];
                } else {
                    answer += "R";
                    rightCur = numbers[i];
                }
            } else if (getDistance(numberXPos, numberYPos, getPos(leftCur).x, getPos(leftCur).y) < getDistance(numberXPos, numberYPos, getPos(rightCur).x, getPos(rightCur).y)) {           
                    answer += "L";
                    leftCur = numbers[i];
            } else {
                    answer += "R";
                    rightCur = numbers[i];
            }
        }
    }
    return answer;

}