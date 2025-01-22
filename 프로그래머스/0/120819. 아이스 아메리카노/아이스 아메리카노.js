function solution(money) {
    const americano = parseInt(money/5500);
    const change = (money%5500);
    return [americano, change]
}