function solution(a, b) {
    const days = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    // (년, 월은 0부터 시작, 일)
    const date = new Date(2016, a - 1, b);
    
    return days[date.getDay()];
}