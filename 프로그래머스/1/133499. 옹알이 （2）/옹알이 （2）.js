function solution(babbling) {
    var cnt = 0;
    var arr = ['aya', 'ye', 'woo', 'ma']
    
    for(let i = 0; i < babbling.length; i++) {
        var word = babbling[i];
        
        if(word.includes('ayaaya') || word.includes('yeye') ||
          word.includes('woowoo') || word.includes('mama')) {
            continue;
        }
        
        for(let j = 0; j < arr.length; j++) {
            word = word.replaceAll(arr[j], ' ')
        }
        if(word.trim() === '') {
            cnt += 1;
        } 
    }

    return cnt;
}