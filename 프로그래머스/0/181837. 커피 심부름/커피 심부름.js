function solution(order) {
    let answer = 0;
    for (let i = 0; i < order.length; i++) {
        let price = order[i];
        if (price.includes("americano") || price === "anything") {
            answer += 4500;
        } else if (price.includes("cafelatte")) {
            answer += 5000;
        }
    }
    return answer;
}