function solution(my_string, queries) {
    let arr = my_string.split('');
    
    for(var i = 0; i < queries.length; i++) {
        var s = queries[i][0];
        var e = queries[i][1];
        
        const reversed = arr.slice(s, e + 1).reverse();
        
        for(var j = 0; j < reversed.length; j++) {
            arr[s + j] = reversed[j];
        }
    }
    return arr.join('');
}