function solution(arr) {
    var rows = arr.length;
    var cols = arr[0].length;
    if(rows > cols) {
        for(var i = 0; i < rows; i++) {
            for(var j = cols; j < rows; j++) {
                arr[i].push(0);
            }
        }
    } else if(rows < cols) {    
        for(var i = 0; i < cols - rows; i++) {
            var newArr = [];
            for(var j = 0; j < cols; j++) {
                newArr.push(0);
            }
            arr.push(newArr);
        }
    }
    return arr;
}