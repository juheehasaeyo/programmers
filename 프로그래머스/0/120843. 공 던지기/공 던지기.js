function solution(numbers, k) {
  let idx = 0;
    
  for(var i = 1; i < k; i++) {
    idx += 2;
    if (idx >= numbers.length) {
      idx -= numbers.length;
    }
  }
  return numbers[idx];
}