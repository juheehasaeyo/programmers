function solution(survey, choices) {
    let answer = "";
    
    let point = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0}
    
    for (let i = 0; i < choices.length; i++) {
        if (choices[i] === 4) {
            continue;
        }
        
        if (choices[i] < 4) {
            // 3이면 1점, 2면 2점, 1이면 3점
            point[survey[i][0]] += 4 - choices[i]
        }
        
        if (choices[i] > 4) {
            // 5면 1점, 6이면 2점, 7이면 3점
            point[survey[i][1]] += choices[i] - 4
        }
    }
    
    if (point["T"] > point["R"]) {
        answer += "T"
    // 사전순이니까 R이 앞! T 먼저 검사해서 둘이 점수 같은 경우도 else로 같이 묶어서 로직 간소화
    // 2, 3, 4번 지표도 동일하게 사전순으로 뒤에 있는 친구 먼저 검사
    } else {
        answer += "R"
    }
    
    if (point["F"] > point["C"]) {
        answer += "F"
    } else {
        answer += "C"
    }
    
    if (point["M"] > point["J"]) {
        answer += "M"
    } else {
        answer += "J"
    }
    
    
    if (point["N"] > point["A"]) {
        answer += "N"
    } else {
        answer += "A"
    }
    

    return answer;
}