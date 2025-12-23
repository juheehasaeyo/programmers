function solution(chicken) {
    var answer = 0;
    var coupon = chicken;

    while (coupon >= 10) {
        var service = Math.floor(coupon / 10); // 서비스 치킨 수
        answer += service;
        
        coupon = service + (coupon % 10); // 새 쿠폰
    }

    return answer;
}