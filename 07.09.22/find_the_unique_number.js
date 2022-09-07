function findUniq(a) {
    let b = [];
    for(let i = 0; i < a.length; i++){
        if(a[i]==a[i+1] || a[i]==a[i+2]){
            b.push(a[i])
            break;
        }
    }
    return Number(a.filter(e => !b.includes(e)))
}