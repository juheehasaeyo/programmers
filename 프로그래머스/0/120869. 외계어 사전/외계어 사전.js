function solution(spell, dic) {
    for (var i = 0; i < dic.length; i++) {
        if (dic[i].split('').sort().join('') === spell.sort().join('')) {
            return 1;
        }
    }
    return 2;
}
