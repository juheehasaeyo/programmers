function solution(name, yearning, photo) {
    var answer = [];
    
    // 1. name[i]는 yearning[i]에 각각 대응한다. => Map 사용
    // 2. photo에 없는 name은 계산하지 않는다.
    
    const map = new Map();
    // map.set("may", 5); 값 넣기
    // map.get("may"); 값 가져오기
    // map.has("may"); // true
    
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        var cnt = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if(name.includes(photo[i][j])) {
                cnt += map.get(photo[i][j]);
            } else {
                cnt += 0;
            }
        }
        answer.push(cnt)
    }
    
    return answer;
}