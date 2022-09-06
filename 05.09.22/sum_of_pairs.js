function sumPairs(ints, s) {
    let sn = {}
    for (var i = 0; i < ints.length; ++i){
        if (sn[s - ints[i]]) return [s - ints[i], ints[i]];
        sn[ints[i]] = true;
        }
}