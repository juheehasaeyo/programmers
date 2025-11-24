function solution(arr) {
    let x = 0;

    while (true) {
        // 배열 복사(이전 상태 저장)
        let prev = [];
        for (let i = 0; i < arr.length; i++) {
            prev[i] = arr[i];
        }

        // arr을 다음 상태로 변환
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 === 1) {
                arr[i] = arr[i] * 2 + 1;
            }
        }

        // prev와 arr가 동일하면 종료
        let same = true;
        for (let i = 0; i < arr.length; i++) {
            if (prev[i] !== arr[i]) {
                same = false;
                break;
            }
        }

        if (same) return x;
        x++;
    }
}