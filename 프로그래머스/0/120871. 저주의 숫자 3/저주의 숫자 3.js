function solution(n) {
  let cnt = 0;
  let answer = 0;

  while (cnt < n) {
    answer += 1;

    // 3의 배수거나, 3이 들어가면 건너뛰기
    if (answer % 3 === 0 || String(answer).includes('3')) {
      continue;
    }
    cnt += 1;
  }
  return answer;
}
