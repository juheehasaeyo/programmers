function solution(common) {
  var answer = 0;
  if (common[2] - common[1] === common[1] - common[0]) {
    const gap = common[1] - common[0];
    answer = common[common.length - 1] + gap;
  } else {
    const ratio = common[1] / common[0];
    answer = common[common.length - 1] * ratio;
  }
  return answer;
}
