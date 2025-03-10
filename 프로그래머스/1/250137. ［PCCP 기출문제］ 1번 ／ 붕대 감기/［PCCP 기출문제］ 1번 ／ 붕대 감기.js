function solution(bandage, health, attacks) {
    let hp = health;
    let success = 0;
    const MAX = health;
    
    let prevTime = 0;
    
    for (const [time, damage] of attacks) {
        let duration = time - prevTime - 1;

        if (duration > 0) {
            let totalHeal = duration * bandage[1] + Math.floor(duration / bandage[0]) * bandage[2];
            hp = Math.min(hp + totalHeal, MAX);
        }

        hp -= damage;
        if (hp <= 0) return -1;

        success = 0;
        prevTime = time;
    }
    
    return hp;
}
