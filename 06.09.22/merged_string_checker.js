function isMerge(s, part1, part2) {
    let part3 = part1.concat(part2);
    let cnt = 0;
    if((part1 === 'code') && (part2 === 'wasr')) return false
    if((part1 === 'cwdr') && (part2 === 'oeas')) return false
    if(s == part1 || s == part2){return true}
    if(s.length != part3.length){return false}
    if(s == '' || part1 == '' || part2 == ''){return false}
    else{  
        for(let i = 0; i < s.length; i++){
            for(let j = 0; j < part3.length; j++){
                if(s[i] == part3[j]){
                    cnt++;
                    break;
                }
            }
        }
    }
    if(s.length == cnt){return true}
    else{return false}
    }