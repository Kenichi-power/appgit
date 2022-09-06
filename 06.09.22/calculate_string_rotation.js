function shiftedDiff(first,second){
    let x = first.split('');
    let y = second.split('');
    let sum = [];
    if(x==y){return 0;}
    let count = 0;
    for(let i = 0; i < x.length; i++){
        if(y[0]!=x[0]){
            x.unshift(x.pop()); 
            count++;   
        }
    }
    x = x.join('');
    y = y.join('');
    if(x==y){return count}
    else{return -1}
}
//or 
function shiftedDiff(first,second){
    if(first.length != second.length){return -1}
    return (second + second).indexOf(first)
}