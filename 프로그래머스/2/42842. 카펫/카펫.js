function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 1; height <= total; height++) {
    if (total % height !== 0) {
        continue;
    }

    const width = total / height;

    if (width < height) {
        continue;
    }

    // 노란색 영역 조건
    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}