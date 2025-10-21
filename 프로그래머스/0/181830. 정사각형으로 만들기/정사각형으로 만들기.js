function solution(arr) {
  const rows = arr.length;
  const cols = arr[0].length;

  if(rows > cols) {
    for (let i = 0; i < rows; i++) {
      while (arr[i].length < rows) {
        arr[i].push(0);
      }
    }
  } else if(cols > rows) {
    for (let i = arr.length; i < cols; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(0);
        }
        arr.push(row);
    }
  }
     return arr;
}