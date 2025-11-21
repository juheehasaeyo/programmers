function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase(); // 1단계
    
    for (let i = 0; i < new_id.length; i++) {
        // 2단계
        if(new_id[i] === '-' || new_id[i] === '_' || new_id[i] === '.' ||
            new_id[i] !== new_id[i].toUpperCase() || !isNaN(Number(new_id[i]))) {
            continue;
        } else {
            new_id = new_id.replace(new_id[i], '');
            i = i-1;
        }
    }    
    
    for (let i = 0; i < new_id.length - 1; i++) {
        // 3단계
        if (new_id[i] === '.' && new_id[i+1] === '.') {
            new_id = new_id.slice(0, i) + new_id.slice(i + 1);
            i = i-1;
        }
    }
    
    // 4단계
    if (new_id[0] === '.') {
        new_id = new_id.slice(1);
    }
    if(new_id[new_id.length-1] === '.') {
        new_id = new_id.slice(0, new_id.length-1);
    }
    
    // 5단계
    if(new_id.length === 0) {
        new_id += 'a';
    }

    // 6단계
    if(new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
    }
    while (new_id[new_id.length - 1] === '.') {
        new_id = new_id.slice(0, new_id.length - 1);
    }
    
    // 7단계
    if(new_id.length <= 2) {
        while(new_id.length < 3) {
            new_id += new_id[new_id.length-1];
        }
    }
    
    console.log(new_id)
    answer = new_id;
    return answer;
}