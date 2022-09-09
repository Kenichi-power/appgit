function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}
function digPow(n, p){
    let dig = p;
    let num = n.toString().split('');
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i])**dig;
        dig++
    }
    if(isFloat(sum/n) == true){return -1;}
    else{return parseInt(sum/n)}
}  