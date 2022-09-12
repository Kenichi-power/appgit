function zeros (n) {
    let countZ = 0;
    while(n>0){
        n=Math.floor(n/5);
        countZ+=n
    }
    return countZ;
    }
//or
function zeros (n) {
    return n/5 < 1 ? 0 : Math.floor(n/5)+zeros(n/5);
    }
