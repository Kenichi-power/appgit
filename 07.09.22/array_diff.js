function arrayDiff(a, b) {
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < a.length; j++){
            if(b[i]==a[j]){
                a.splice(j,1);
                j--;
            }
        }
    }
    return a;
}
//or
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
    // return a.filter(function(e){return !b.includes(e)})
}